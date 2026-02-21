/*

🎯 LLD Problem #1 — Parking Lot Management System (Core Library)

You are building a Parking Lot Engine that can be used by:

• a web app
• a mobile app
• a kiosk system

So your job is to design clean domain logic, not APIs.

Think of it like an npm package: parking-lot-core.

📌 Functional Requirements
1. Parking lot structure

Parking lot has multiple floors

Each floor has parking spots of types:

BIKE

CAR

TRUCK

Each spot can hold only one vehicle of matching type

2. Vehicle entry

When a vehicle arrives:

System should:

✅ Find nearest available spot (lowest floor, then closest spot number)
✅ Park vehicle
✅ Generate a ticket with:

ticketId

vehicleNumber

spotId

entryTime

3. Vehicle exit

When vehicle leaves:

System should:

✅ Free the spot
✅ Calculate fee based on time spent
✅ Return payment amount

4. Pricing

Initial rule (simple):

Vehicle Type	Price per hour
BIKE	₹10
CAR	₹20
TRUCK	₹40

But pricing logic must be easily changeable later

5. Extensibility (VERY IMPORTANT)

Your design should easily support:

✔ adding new vehicle types
✔ adding new pricing strategies (flat rate, dynamic, weekend surge etc.)
✔ adding different spot allocation strategies later

❌ Out of scope (for now)

No database
No REST APIs
No authentication
No UI

Pure business logic.

🧠 Non-functional expectations (what interviewers watch)

Your design should show:

• clear responsibilities
• low coupling
• open for extension
• no god objects
• readable domain modeling

*/

