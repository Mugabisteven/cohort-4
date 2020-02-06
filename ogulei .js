function cash(mne,pcnt,txt){
    let tax=txt/pcnt*mne
    console.log(tax)

    let netpay=mne-tax
    console.log(netpay)
}

cash(1000000,100,30)
