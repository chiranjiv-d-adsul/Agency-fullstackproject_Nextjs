Still we use use client the initial rendering on the server side then on client side also.
Now what is hydration problem ,lets see with the example if we use math.random to console on server and client then it will generate different random number on both client and server and thus there is the hydration problem occurs.
 And give error that content does not match server-rendered HTML

TO resolve the hydration problem using hooks:

1.Here we can use hook so that it will rendered only on client component not on server
#
const [isClient, setIsclient]= useState(false);
  useEffect(()=>{
    setIsclient(true);
  },[]);
#
2 . Next link use prefetch because of this it shows very fast if we click on the link
by prefetch on link it will not prefetch and our performance will better other wise if there is more links there will be performance issue.

#
<Link href="/" prefetch={false}>Click here </Link>

#
clientserver provider without using use client it will act as client component but orginally it will remains server  componen

Navigation
our component should pe client side for useRouter
useRouter in this  router.push provide client side navigation to provides routes

router.replace will come to our empty browser
router.refresh will refresh the page and go to the path

usePathname()
will give path

useSearchParams()
.get query
.set sets a new query

fetching using api is async operations thus we use async here

next js have default behaviour of data cache which increase in performance but to stop this default behaviour lets see
if we dont want to cache data then
..
{slug} it can take our query for example id
from params we can reach slug


<!-- install auth of this version because new one is unstable to define github and other profiles i get stuck on it for a while -->
*
npm install next-auth@5.0.0-beta.3
*
creating routes for auth is good and necessary to handle session