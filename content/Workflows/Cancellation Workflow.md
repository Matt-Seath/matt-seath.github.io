+++
title = "Cancellation Workflow"
weight = 9
+++

{{< br >}}


1. Paste the following template into the text field and fill in the missing values.

    ```
    Hi [name],

    I’ve received a cancellation request for [organisation name], to end the following services: 

    [insert product(s) here]

    Please note, as per our Terms and Conditions, the 30 day notice of cancellation will take effect from the day your request was submitted. Therefore, the cancellation date will be [dd/mm/yy] and you will receive one last invoice for month.

    Read Only access will be provided for 90days for you to extract any information for reporting purposes. (Ending on [dd/mm/yy])

    Please ensure that you are familiar with any legislation/policies around data retention. If you have any questions please reach out to your State and Federal Government Entities.

    If there’s any further information that I can supply please don’t hesitate to ask. 

    We’re sorry to see you go.

    I’ll send you an email confirming when the cancellation has been finalised.

    Kind regards,
    ```

    - Change the message visablity from internal to match the client email.

2. Add a client warning in Host:

    - Select the client and open the 'Client Tags' tab.
    
    - Under 'Tag Operations' select 'Type' dropdown and select 'Client Warning'.

    ![image](/images/workflows/44e71807-dc0d-46a0-98e5-82ff416a6287.png)

    - Paste the following into the field, filling in the missing values.
    ```
    Cancellation - [Zendesk ticket] - Read only until [dd/mm/yy]
    ```
    ![image](/images/workflows/91d451a3-7a4f-4580-a9ed-21b9dec614a8.png)

    - Click 'OK'.

3. Process the End-date for all relevant billable Cloudlogic packages 90 days from cancellation:

    ![image](/images/workflows/ac699ee2-a5a4-4e4a-b8cf-3748f0952e5e.png)

    - Add the following note if not autofilled:
    ```
    Cancellation - [Zendesk ticket] - RO until [dd/mm/yy]
    ```
4. Process the End-date for DealerLogic packages as normal:

    - Enddating Dealerlogic package at the 30day canellation date - this ensures that the customer will be RO after the 30days

    ![image](/images/workflows/3449eb46-ee8c-445a-9067-46924a611b87.png)

5. Process the Bulk End-dates:

    - Accounting
    - Client Server
    - Forms
    - DAIS
    - Network
    - Invoicing

    ![image](/images/workflows/80e966e2-2c25-46b4-a54e-24aef0cbfd3c.png)

6. Create a followup ticket in Zendesk:

    - Include the following:
    ```
    Cancellation Zendesk link
    Email customer
    Remove 1 gg user and email IT
    ```

    ![image](/images/workflows/494883e1-2932-4b7f-8c30-fcd255949563.png)

7. Put a reminder in software support email calender for 90 days time (DAY AFTER the RO date ends):

    - Reminder:
    ```
    - [Zendesk Ticket] - [organisation name] - [client number]
    - delete gg users
    - IT to delete gg users and database”
    ```

    - Add yourself as an attendee.

    ![image](/images/workflows/e12973ad-ffc7-4c6e-a525-2bd697c7ba20.png)

8. Email the client at the 30 day mark:

    ```
    Hi [name],

    This email is to confirm that the cancellation for [organisation name] is complete.

    The services included on this cancellation are:
    [List products here]

    Please continue to log into Cloudlogic using username [______]

    Dealerlogic Read Only access is available until [dd/mm/yy] for you to extract any information you require for reporting purposes for an additional charge. 

    Please ensure that you are familiar with any legislation/policies around data retention. If you have any questions please reach out to your State and Federal Government Entities.

    After the [dd/mm/yy] your data backups will be destroyed and no further access will be available.

    Kind regards,
    ```

### After 30 days have passed


1. Disable all but 1 gg user from DuoMobile.

2. Email IT to remove all but 1 "gg" user.
    ```
    caa.itsupport@coxautoinc.com
    ```

    Email template:
    ```
    Hi, please remove the following [user/s]:
    
    username: [gg/user]

    Thanks!
    ```

3. Once email confirmation is recieved from IT:

    - copy job ID and confirmation message into Zendesk ticket.

    - Submit ticket as "Open".

4. Once IT confirms users are removed:

    - copy job ID and confirmation message into Zendesk ticket.

    - Submit ticket as "Closed".
