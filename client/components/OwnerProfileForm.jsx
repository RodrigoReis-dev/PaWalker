import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from '../apis/AuthApi'
//import { formStage, formSignup } from '../../store/rootSlice'

function OwnerProfileForm(SignupOwner) {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.user.token)

  // const InitialStage = useSelector((state) => state.FormStage)
  // const OwnerName = useSelector((state) => state.Owner.name)
  // const location = useSelector((state) => state.owner.location)
  // const bio = useSelector((state) => state.owner.bio)
  // const email = useSelector((state) => state.owner.email)
  // const phoneNumber = useSelector((state) => state.owner.phone)
  // const approachable = useSelector((state) => state.owner.approch)
  // const rank = useSelector((state) => state.walker.rank)
  // const img = useSelector((state) => state.owner.image)
  // const walker = useSelector((state) => state.walker.bool)
  // const owner = useSelector((state) => state.owner.bool)
  // form values initial state

  const [formData, setFormData] = useState({
    name: '',
    location: '',
    bio: '',
    email: '',
    phone_number: '',
    approachable: '',
    rank: '',
    img: '',
    walker: '',
    owner: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const [errors, setErrors] = useState({})
  const validate = (formData) => {
    let formErrors = {}

    // name
    if (!formData.name) {
      formErrors.name = 'Name required'
    }

    //location
    if (!formData.location) {
      formErrors.location = 'address required'
    }

    // bio
    if (!formData.bio == ' ') {
      formErrors.bio = 'Bio Required'
    }

    //email
    const emailRegex = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    )
    if (!formData.email || !emailRegex.test(formData.email)) {
      formErrors.email = 'Valid Email required'
    }

    // phone
    if (!formData.phone_number == ' ') {
      formErrors.phone_number = 'Phone number Required'
    }

    // approch
    if (!formData.approachable == ' ') {
      formErrors.approachable =
        'Please click on the button which relects your approach status'
    }

    // image
    if (!formData.img == ' ') {
      formErrors.img = 'Please upload an image'
    }

    // isWalker
    if (!formData.walker == ' ') {
      formErrors.walker = 'Please identify as a Walker or Owner'
    }

    // isOwner
    if (!formData.owner == ' ') {
      formErrors.owner = 'Please identify as an Owner or walker'
    }
    return formErrors
  }
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validate(formData))
    console.log('check')
    //dispatch(saveUser(formData))
    updateUser(formData, token)
  }

  return (
    <>
      <h2>{'Signup Here'}</h2>

      <form name="Ownersform" id="Ownersform" onSubmit={(e) => handleSubmit(e)}>
        <p>
          <label htmlFor="name">
            Owners Name<span className="OwnersForm"></span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="enter name"
            placeholder="enter name"
            value={formData.name}
            onChange={handleChange}
          />
        </p>
        {errors.name && <span className="error-message">{errors.name}</span>}

        <p>
          <label htmlFor="location">
            <span className="OwnersForm"></span>
          </label>
          <input
            type="text"
            id="name"
            name="location"
            autoComplete="enter location"
            placeholder="enter location"
            value={formData.location}
            onChange={handleChange}
          />
        </p>

        <p>
          <label htmlFor="bio">
            Pets Image<span className="OwnersForm"></span>
          </label>
          <input
            type="text"
            id="bio"
            name="bio"
            autoComplete="bio"
            placeholder="bio"
            value={formData.bio}
            onChange={handleChange}
          />
        </p>
        {errors.bio && <span className="error-message">{errors.bio}</span>}

        <p>
          <label htmlFor="email">
            Pet Quantity<span className="OwnersForm"></span>
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
          />
        </p>
        {errors.email && <span className="error-message">{errors.email}</span>}

        <p className="disclaimer-text">
          <span className="OwnersForm"></span> required fields
        </p>

        <div className="Submit">
          <p>
            <input type="submit" value={'Submit'} />
          </p>
        </div>
      </form>
    </>
  )
}

export default OwnerProfileForm