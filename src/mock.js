import angular from 'angular';
import 'angular-mocks';


const products = [
    /*[
    {
    "id": 1,
    "type": "lounge",
    "minPrice": 75
    }
    ],*/
    [
    {
    "id": 2,
    "type": "meal",
    "logo": "https://images.aerlingus.com/resrc-origin/s=w585m,u/c=w585,h200,xof50,yof50/s=w590,pd1/o=75/https://www.aerlingus.com/media/images/flows/meals/meals.jpg",
    "minPrice": 25
    },
    {
    "id": 3,
    "type": "daa",
    "logo": "https://images.aerlingus.com/resrc-origin/s=w585m,u/c=w585,h200,xof50,yof50/s=w590,pd1/o=75/https://www.aerlingus.com/media/images/flows/daa/daa.jpg",
    "minPrice": 25
    }
    ],
    [
    {
    "id": 4,
    "type": "hex",
    "logo": "https://images.aerlingus.com/resrc-origin/s=w585m,u/c=w585,h200,xof50,yof50/s=w590,pd1/o=75/https://www.aerlingus.com/media/images/flows/daa/daa.jpg",
    "minPrice": 21
    },
    {
    "id": 5,
    "type": "carhire",
    "logo": "https://images.aerlingus.com/resrc-origin/s=w1170m,u/c=w1170,h200,xof50,yof50/s=w1170,pd1/o=75/https://www.aerlingus.com/media/images/flows/carhire/carhire.jpg",
    "minPrice": 59.99

    },
    {
    "id": 6,
    "type": "lounge",
    "logo": "https://images.aerlingus.com/resrc-origin/s=w1060m,u/c=w1060,h330,xof50,yof50/s=w530,pd1/o=75/https://www.aerlingus.com/media/images/flows/lounge/dub/lounge.jpg",
    "minPrice": 25
    }
    ]
];

var paxInfoMock = {"data":{"totalAmountDue":3750.5,"totalPrice":3300.5,"noOfAdults":2,"noOfChildren":2,"noOfInfants":2,"currencyCode":"&euro;","tripType":"Round Trip","flightsSummary":{"tripType":"Round Trip","journeySummary":[{"noOfSegments":2,"fareType":"low","departureDate":"Sep 25, 2014 3:00:00 AM","arrivalDate":"Sep 25, 2014 3:00:00 AM","origin":"DUB","destination":"JFK","flightNumber":432,"tripDuration":"10h30m","operatingAirlineCode":"EI","operatingAirlineName":"AerLingus","legsSummary":[{"departureDate":"Sep 25, 2014 3:00:00 AM","arrivalDate":"Sep 25, 2014 3:00:00 AM","origin":"DUB","destination":"LHR","flightNumber":432,"stopOverDuration":"","operatingAirlineCode":"EI","operatingAirlineName":"AerLingus"},{"departureDate":"Sep 26, 2014 3:00:00 AM","arrivalDate":"Sep 26, 2014 3:00:00 AM","origin":"LHR","destination":"JFK","flightNumber":432,"stopOverDuration":"3h45m","operatingAirlineCode":"EI","operatingAirlineName":"AerLingus"}]},{"noOfSegments":2,"fareType":"low","departureDate":"Sep 25, 2014 3:00:00 AM","arrivalDate":"Sep 25, 2014 3:00:00 AM","origin":"JFK","destination":"DUB","flightNumber":432,"tripDuration":"10h30m","operatingAirlineCode":"EI","operatingAirlineName":"AerLingus","legsSummary":[{"departureDate":"Sep 25, 2014 3:00:00 AM","arrivalDate":"Sep 25, 2014 3:00:00 AM","origin":"JFK","destination":"LHR","flightNumber":432,"stopOverDuration":"","operatingAirlineCode":"EI","operatingAirlineName":"AerLingus"},{"departureDate":"Sep 25, 2014 3:00:00 AM","arrivalDate":"Sep 25, 2014 3:00:00 AM","origin":"LHR","destination":"DUB","flightNumber":432,"stopOverDuration":"3h45m","operatingAirlineCode":"EI","operatingAirlineName":"AerLingus"}]}]},"fareSummary":{"adultsFareSummary":{"fare":13.98,"tax":96.98,"discount":-1.78,"total":109.21},"childrenFareSummary":{"fare":13.98,"tax":96.98,"discount":-1.78,"total":109.21},"infantsFareSummary":{"fare":13.98,"tax":96.98,"discount":-1.78,"total":109.21},"adminFee":56,"totalFare":711.26},"voucherSummary":{"voucherAmount":-450,"voucherNumber":"2345564634554566","voucherExpiryDate":"2014/08/30"},"groupBookingSummary":{"groupBooking":"false","groupName":"","noOfPassengers":3},"passengersSummary":{"noOfPassengers":3,"passengerSummary":[{"passengerName":"Alex Smith","smsNotificationEnabled":true,"smsNotificationPrice":1,"checkedBagsSummary":{"checkedBagSummary":[{"tripType":"outbound","bagWeight":35,"bagQty":3,"bagWeightUnit":"Kg","bagDesc":"Bag","bagPrice":35},{"tripType":"inbound","bagWeight":25,"bagQty":2,"bagWeightUnit":"Kg","bagDesc":"Bag","bagPrice":25}],"totalForBags":50},"sportsBagsSummary":{"sportsBagSummary":[{"bagDesc":"Surfboard1","bagsPrice":25},{"bagDesc":"Snowboard2","bagsPrice":25}],"totalForSports":50},"seatsSummary":{"seatSummary":[{"seatNo":"29G","origin":"DUB","destination":"LHR","seatPrice":10},{"seatNo":"30G","origin":"DUB","destination":"LHR","seatPrice":10}],"totalForSeats":20}},{"passengerName":"Hugo Welke","smsNotificationEnabled":true,"smsNotificationPrice":1,"checkedBagsSummary":{"checkedBagSummary":[{"tripType":"outbound","bagWeight":35,"bagQty":3,"bagWeightUnit":"Kg","bagDesc":"Bag","bagPrice":35},{"tripType":"inbound","bagWeight":25,"bagQty":2,"bagWeightUnit":"Kg","bagDesc":"Bag","bagPrice":25}],"totalForBags":50},"sportsBagsSummary":{"sportsBagSummary":[{"bagDesc":"Surfboard1","bagsPrice":25},{"bagDesc":"Snowboard2","bagsPrice":25}],"totalForSports":50},"seatsSummary":{"seatSummary":[{"seatNo":"29G","origin":"DUB","destination":"LHR","seatPrice":10},{"seatNo":"30G","origin":"DUB","destination":"LHR","seatPrice":10}],"totalForSeats":20}},{"passengerName":"Paul Grady","smsNotificationEnabled":true,"smsNotificationPrice":1,"checkedBagsSummary":{"checkedBagSummary":[{"tripType":"outbound","bagWeight":35,"bagQty":3,"bagWeightUnit":"Kg","bagDesc":"Bag","bagPrice":35},{"tripType":"inbound","bagWeight":25,"bagQty":2,"bagWeightUnit":"Kg","bagDesc":"Bag","bagPrice":25}],"totalForBags":50},"sportsBagsSummary":{"sportsBagSummary":[{"bagDesc":"Surfboard1","bagsPrice":25},{"bagDesc":"Snowboard2","bagsPrice":25}],"totalForSports":50},"seatsSummary":{"seatSummary":[{"seatNo":"29G","origin":"DUB","destination":"LHR","seatPrice":10},{"seatNo":"30G","origin":"DUB","destination":"LHR","seatPrice":10}],"totalForSeats":20}}],"totalForPassengers":85},"travelExtrasSummary":{"billedBookingSummary":{"loungeSummary":[{"noOfPassengers":2,"loungeAccessDesc":"Dublin Lounge Access","loungeCost":20},{"noOfPassengers":2,"loungeAccessDesc":"Boston Lounge Access","loungeCost":25}],"heathrowExpressSummary":{"noOfTickets":2,"ticketType":"Return","ticketsCost":84},"mealsSummary":{"mealSummary":[{"origin":"DUB","destination":"LHR","name":"Power me Salad","description":"Salad filled with vegetables","price":10.24},{"origin":"LHR","destination":"JFK","name":"Irish Breakfast","description":"Breakfast with cheese and macoroni","price":7.24}],"totalForMeals":45.45},"billedBookingTotal":245.8},"billedCardSummary":{"carHireSummary":[{"pickUpLocationCode":"LON","pickUpLocationName":"London","pickUpDate":"Sep 25, 2014 3:00:00 AM","dropDate":"Sep 25, 2014 3:00:00 AM","totalCharge":54.53}],"carParkingSummary":[{"noOfDays":2,"description":"RED Parking","cost":24.5,"airport":"JFK"}],"insuranceSummary":{"noOfAdults":3,"insuranceCost":16.25},"billedCardTotal":50.45},"totalTravelExtras":"296.25"}},"messages":null,"configDetail":{"regex":null,"url":"","userLocale":null},"statusCode":"success"};


const meals = {"messages":[],"data":[{"rows":[[{"sequence":2,"textCode":"fh.sh","urlPostfix":"FN","type":"meals","currency":"&euro;","minPrice":9.99,"productAvailable":true,"productCount":1,"subTotal":9.99,"prodSelected":true,"reviewSelection":true,"productActive":false,"included":false}]],"lounge":null,"meals":{"mealsOnSegments":[{"segmentId":"0","journeyId":0,"origin":"DUB","destination":"TXL","originAirportName":"DUBLIN","destinationAirportName":"BERLIN/TXL","fareClass":"LOW","fareType":"economy_low","flightDuration":"2h20m","availableFrom":1432335600000,"availableTo":1460761200000,"availableFromFormattedStr":"2015-05-23T00:00:00.000","availableToFormattedStr":"2016-04-16T00:00:00.000","message":null,"status":"AVAILABLE","visible":true,"available":true,"longHaul":false,"shortHaul":true,"business":false,"codeShare":false,"interline":false,"codeShareInterline":false,"passengerMealList":[{"passengerId":"1","passengerName":"Harry McKillen","anyMealAdded":true,"selMealName":"BFML","selMealDescription":"Breakfast","selMealCode":[{"segmentIndex":"0","passengerIndex":"1","mealIndex":"0","mealCode":"BFML-#S0#P1#M0","addedMealCode":null}],"selMealIncluded":true,"selMealPrice":9.99,"mealList":[{"sequence":5,"available":true,"visible":true,"included":false,"selected":true,"added":true,"name":"BFML","remaining":14,"description":"Breakfast","price":9.99,"mealId":0,"productTitle":"Breakfast","productId":0,"codeList":[{"segmentIndex":"0","passengerIndex":"1","mealIndex":"0","mealCode":"BFML-#S0#P1#M0","addedMealCode":null}],"imageList":[{"sequence":1,"url":"/media/aerlinguscom/styleassets/images/obe/business/travel-essentials/meals/breakfast1.jpg"}]}],"active":false},{"passengerId":"2","passengerName":"Donald Duck","anyMealAdded":true,"selMealName":"BFML","selMealDescription":"Breakfast","selMealCode":[{"segmentIndex":"0","passengerIndex":"1","mealIndex":"0","mealCode":"BFML-#S0#P1#M0","addedMealCode":null}],"selMealIncluded":true,"selMealPrice":9.99,"mealList":[{"sequence":5,"available":true,"visible":true,"included":false,"selected":true,"added":true,"name":"BFML","remaining":14,"description":"Breakfast","price":9.99,"mealId":0,"productTitle":"Breakfast","productId":0,"codeList":[{"segmentIndex":"0","passengerIndex":"1","mealIndex":"0","mealCode":"BFML-#S0#P1#M0","addedMealCode":null}],"imageList":[{"sequence":1,"url":"/media/aerlinguscom/styleassets/images/obe/business/travel-essentials/meals/breakfast1.jpg"}]}],"active":false},{"passengerId":"3","passengerName":"Little Stuart","anyMealAdded":true,"selMealName":"BFML","selMealDescription":"Breakfast","selMealCode":[{"segmentIndex":"0","passengerIndex":"1","mealIndex":"0","mealCode":"BFML-#S0#P1#M0","addedMealCode":null}],"selMealIncluded":true,"selMealPrice":9.99,"mealList":[{"sequence":5,"available":true,"visible":true,"included":false,"selected":true,"added":true,"name":"BFML","remaining":14,"description":"Breakfast","price":9.99,"mealId":0,"productTitle":"Breakfast","productId":0,"codeList":[{"segmentIndex":"0","passengerIndex":"1","mealIndex":"0","mealCode":"BFML-#S0#P1#M0","addedMealCode":null}],"imageList":[{"sequence":1,"url":"/media/aerlinguscom/styleassets/images/obe/business/travel-essentials/meals/breakfast1.jpg"}]}],"active":false}],"regional":false,"mealAvailableOnSegment":false,"shortHaulMeal":false,"shortHaulNonEiMeal":false}],"travellingWithInfant":false},"hex":null,"daa":null,"configDetail":null,"messages":null,"statusCode":null,"carHireBooking":null,"manageFlow":false,"travellersInsurance":null}],"extensions":[],"statusCode":"success","redirectUrl":null,"profile":null,"config":{"properties":{"responseFactoryConfiguration":{"activeSessionTime":1200,"popUpDisplayTime":120}}},"exceptionIdList":""};

angular.module('app-mocks', ['ngMockE2E'])
.run(($httpBackend) => {

    $httpBackend.whenGET(/\.html/).passThrough();
	$httpBackend.whenGET(/\.json/).passThrough();

    $httpBackend.whenGET('/products').respond(products);
    $httpBackend.whenGET('/meals').respond(meals);
    $httpBackend.whenGET('/paxInfo').respond(paxInfoMock);
});

angular.module('appMeals').requires.push('app-mocks');