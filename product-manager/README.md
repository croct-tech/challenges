<p align="center">
    <a href="https://croct.com">
      <img src="https://cdn.croct.io/brand/logo/repo-icon-green.svg" alt="Croct" height="80"/>
    </a>
    <br />
    <strong>Feature Specification</strong>
    <br />
    Technical specification for the sign-in and sign-up features.
</p>

# Challenge

As a Product Manager that just joined the team, one of your tasks is to write the user stories that will guide the development team in building the product.

The design team and the product manager collaborated to create the wireframes that you'll use as a base to write the user stories. Your task is to describe all possible scenarios involving the sign-in and sign-up pages. For each interaction, you need to write a scenario that tells the user's story and how the interface should behave.

To better understand the screens you should describe, you can revisit the conversation between the designer and the product manager who created the wireframes.

## Requirements

Completing the challenge will require you to:

- Write the stories in English 🇺🇸
- Use a clear and unambiguous writing style
- Describe the stories in plain text using the [Gherkin language](https://cucumber.io/docs/gherkin/reference)
- Uncover as many scenarios as possible: there are at least 6 stories on each page.

Below, you can see the example of a story where the user wants to change their name from `john-doe` to `johndoe`:

> **Scenario: Changing to a new valid username**
>
> When I visit the personal settings page
>
> And I enter a new username `johndoe`
>
> And click to *Save*
>
> Then I should see a notification saying _"Changes successfully saved!"_

## Chat between design and product teams

Here is the transcript of the conversation between the **Designer** and the **Product Manager**:

> **Designer:** Hi there! I just got that task assigned to design, and I have some questions I would like to clarify with you.
>
> **Product Manager:** Sure! How can I help you?
>
> **Designer:** Let's start from the beginning. I designed this navigation flow between these [sign-in and sign-up screens](https://user-images.githubusercontent.com/943036/114629591-3f3ab300-9c8f-11eb-9edb-cbe5cd9a4051.png). What are your thoughts?
>
> **Product Manager:** I just took a look here. It seems good, but don't forget that your task comprehends only the sign-in and sign-up screens. Don't worry about the other screens for now.
>
> **Designer:** Ok! Which information does a user need to provide to create an account?
>
> **Product Manager:** The user should enter their first and last names, valid email, and a strong password. Plus, they should agree to our terms of use and privacy policy since we deal with customers' data.
>
> **Designer:** Noted! Could you please explain the minimum requirements for a password to be considered "strong"?
>
> **Product Manager:** Great question! We take security very seriously here. That's why we have some strict password requirements. At the very least, for a password to be considered strong, it should be at least 8 characters long, contain uppercase and lowercase letters, and have at least one number or symbol.
>
> **Designer:** Got it. Once the user is registered, which information do they need to log in to Croct?
>
> **Product Manager:** The email and password, as usual.
>
> **Designer:** That's what I thought. Taking all we've discussed into account, I designed these [wireframes](https://user-images.githubusercontent.com/943036/114629543-2c27e300-9c8f-11eb-9122-d9c11113e5db.png) for the pages.
>
> **Designer**: Do you think the structure and copies make sense?
>
> **Product Manager:** That's exactly it!
>
> **Designer:** Good to hear! And, thank you for the help 😉. Once I finish the screens, I will send them to you to write the user stories.
>
> **Product Manager:** Anytime 🙂
>
> **Designer:** See you later!

## Deliverable

Please send us the repository's link to jobs@croct.com, and we will reply to your email with the next steps in the process.

We will do our best to review your project and get back with feedback on the result as soon as possible.
