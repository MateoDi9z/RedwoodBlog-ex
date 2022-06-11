//import { Link, routes } from '@redwoodjs/router'
import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
  Label,
  useForm,
  FormError,
} from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { Toaster, toast } from '@redwoodjs/web/toast'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm()
  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Contact created successfully.')
      formMethods.reset()
    },
  })

  const onSubmit = (data) => {
    create({ variables: { input: data } })
  }

  return (
    <div className="page contact">
      <MetaTags title="Contact" description="Contact page" />

      <Toaster />
      <Form onSubmit={onSubmit} formMethods={formMethods} error={error}>
        <h1>Contact</h1>
        <Label name="name" errorClassName="errorlabel" className="label">
          Name
        </Label>
        <TextField
          name="name"
          errorClassName="inputerror"
          validation={{ required: true }}
          className="input name"
        />
        <FieldError name="name" className="error" />

        <Label name="email" errorClassName="errorlabel" className="label">
          Email
        </Label>
        <TextField
          name="email"
          errorClassName="inputerror"
          validation={{
            required: true,
          }}
          className="input email"
        />
        <FieldError name="email" className="error" />

        <Label name="message" errorClassName="errorlabel" className="label">
          Message
        </Label>
        <TextAreaField
          name="message"
          errorClassName="inputerror"
          validation={{ required: true }}
          className="input msg"
        />
        <FieldError name="message" className="error" />

        <FormError error={error} wrapperClassName="form-error" />

        <Submit disabled={loading} className="button1 contactSubmit">
          Send Message
        </Submit>
      </Form>
    </div>
  )
}

export default ContactPage
