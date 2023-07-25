import React, { FC } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ArticlesList from "./articles/ArticlesList";
import ArticleCategoriesList from "./article-categories/ArticleCategoriesList";
import ArticleSubcategoriesList from "./article-subcategories/ArticleSubcategoriesList";
import BanksList from "./banks/BanksList";
import BillsList from "./bills/BillsList";
import ClientsList from "./clients/ClientsList";
import ContractsList from "./contracts/ContractsList";
import InvoicesList from "./invoices/InvoicesList";
import PurchasesList from "./purchases/PurchasesList";
import RegionsList from "./regions/RegionsList";
import SettingsList from "./settings/SettingsList";

const Pages: FC = () => {
  return (
    <BrowserRouter>
      <Route exact path={"/articles"}>
        <ArticlesList />
      </Route>
      <Route exact path={"/article-categories"}>
        <ArticleCategoriesList />
      </Route>
      <Route exact path={"/article-subcategories"}>
        <ArticleSubcategoriesList />
      </Route>
      <Route exact path={"/banks"}>
        <BanksList />
      </Route>
      <Route exact path={"/bills"}>
        <BillsList />
      </Route>
      <Route path={"/invoices"}>
        <InvoicesList />
      </Route>
      <Route path={"/purchases"}>
        <PurchasesList />
      </Route>
      <Route path={"/contracts"}>
        <ContractsList />
      </Route>
      <Route path={"/clients"}>
        <ClientsList />
      </Route>
      <Route path={"/regions"}>
        <RegionsList />
      </Route>
      <Route path={"/settings"}>
        <SettingsList />
      </Route>
    </BrowserRouter>
  );
};

export default Pages;
