```javascript
// Correct use of $inc operator
db.collection('myCollection').updateOne( { "_id": ObjectId("651a6c875579c40004047735") }, { $inc: { "count": 10 } } );
```