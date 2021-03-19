const express = require('express')
const router = express.Router();
let accounts = require('./db')

// Get request parameters
router.get("/accounts", (req,res) => {
    res.json({userData: accounts});
})

//Post
router.post("/accounts", (req,res) => {
    const incomingAccount = req.body;
    accounts.push(incomingAccount);
    res.json(incomingAccount);
})


router.get('/account/:id', (req,res) => {
    const accountid = Number(req.params.id);
    const getAccount = accounts.find( (account) => account.id === accountid);
    
    if (!getAccount) {
        res.status(500).send("Account not found");
    } else {
        res.json({userData: [ getAccount]})
    }
});

router.put('/account/:id', (req,res) => {
    const accountid = Number(req.params.id);
    const body = req.body;
    const account = accounts.find(account=> accountid === account.id);
    const index = accounts.indexOf(account);

    if ( !account ) {
        res.status(500).send("Account not found");
    } else {
        const updatedAccount = { ...account, ...body}
        console.log(account);
        account[index] = updatedAccount;
        res.end();
    }
});

router.delete('/account/:id', (req,res) => {
    const accountid = Number(req.params.id);
    const newAccounts = accounts.filter(account=>  account.id != accountid);

    if ( !newAccounts ) {
        res.status(500).send("Account not found");
    } else {
        accounts = newAccounts;
        res.send(accounts);
    }
});


module.exports = router;