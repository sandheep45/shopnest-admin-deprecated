import { t } from "./helpers/createRouter";
import { mediaRouter } from "./Media.router";
import { metadataRouter } from "./MetaData.router";
import { variantoptionsRouter } from "./VariantOption.router";
import { variantsRouter } from "./Variant.router";
import { productsRouter } from "./Product.router";
import { customerreviewsRouter } from "./CustomerReview.router";
import { categoriesRouter } from "./Category.router";
import { accountsRouter } from "./Account.router";
import { sessionsRouter } from "./Session.router";
import { usersRouter } from "./User.router";
import { verificationtokensRouter } from "./VerificationToken.router";

export const appRouter = t.router({
  media: mediaRouter,
  metadata: metadataRouter,
  variantoption: variantoptionsRouter,
  variant: variantsRouter,
  product: productsRouter,
  customerreview: customerreviewsRouter,
  category: categoriesRouter,
  account: accountsRouter,
  session: sessionsRouter,
  user: usersRouter,
  verificationtoken: verificationtokensRouter
})

