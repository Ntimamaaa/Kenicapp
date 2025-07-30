
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CheckCircle, Mail, Phone, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const registrars = [
  { name: "Novahost Kenya Ltd", phone: "0719 888 624", email: "support@novahost.co.ke", website: "#", hint: "hosting logo" },
  { name: "Truehost Cloud Limited", phone: "+25420 790 3111", email: "info@truehost.co.ke", website: "#", hint: "cloud hosting" },
  { name: "Kenya Website Experts", phone: "0722 209 414", email: "info@kenyawebexperts.co.ke", website: "#", hint: "web design" },
  { name: "HostPinnacle Cloud Limited", phone: "0111054710", email: "info@hostpinnacle.co.ke", website: "#", hint: "cloud services" },
  { name: "HostAfrica EAC", phone: "0709 399 000", email: "support@hostafrica.com", website: "#", hint: "africa hosting" },
  { name: "Webhost Kenya", phone: "0700337799", email: "info@webhostkenya.co.ke", website: "#", hint: "kenya web" },
  { name: "Safaricom Kenya", phone: "0722002222", email: "business.support@safaricom.co.ke", website: "#", hint: "telecom logo" },
  { name: "Lexsynergy", phone: "+ 44 (0) 20 313 70459", email: "hello@lexsynergy.com", website: "#", hint: "legal services" },
  { name: "Afriregister Limited", phone: "0724445740", email: "admin@afriregister.co.ke", website: "#", hint: "domain registration" },
  { name: "Oracom Web Solutions LTD", phone: "+254 713271546", email: "support@oracom.co.ke", website: "#", hint: "web solutions" },
  { name: "Hostnali Webhost Limited", phone: "+254748285257", email: "info@hostnali.com", website: "#", hint: "web hosting" },
  { name: "HostPido Technologies", phone: "+254715 336 715", email: "support@hostpido.com", website: "#", hint: "tech logo" },
  { name: "Chajio Cloud Limited", phone: "0202 166 166", email: "support@chajiocloud.com", website: "#", hint: "cloud logo" },
  { name: "Vilcom", phone: "0726888777 / 0111028800", email: "hosting@vilcom.co.ke", website: "#", hint: "tech solutions" },
  { name: "Lancola Tech Company Ltd", phone: "0715223428", email: "allan@lancolatech.com", website: "#", hint: "tech company" },
  { name: "Heartbit Computer Solutions", phone: "0764 588705", email: "info@heartbitsolutions.com", website: "#", hint: "computer services" },
  { name: "Asterisk Technologies", phone: "0721270241", email: "sales@asterisktech.co.ke", website: "#", hint: "technology logo" },
  { name: "Aheri Basic Internet Ltd", phone: "0735555660", email: "domains@aheri.net", website: "#", hint: "internet provider" },
  { name: "PATAHOST", phone: "+(254)728 827 927", email: "support@patahost.com", website: "#", hint: "hosting company" },
  { name: "Geo Cloud Africa", phone: "+254732852180", email: "info@geocloudafrica.com", website: "#", hint: "cloud africa" },
  { name: "Movetech Solutions Ltd", phone: "0721 722333", email: "info@movetechsolutions.com", website: "#", hint: "tech solutions logo" },
  { name: "Softzone Limited", phone: "020 4931198", email: "sales@softzone.co.ke", website: "#", hint: "software company" },
  { name: "Starnet Solutions", phone: "+254 725 811 516", email: "info@starnet.co.ke", website: "#", hint: "network solutions" },
  { name: "Swiftweb Technologies Ltd", phone: "0722899717", email: "info@wiftweb.co.ke", website: "#", hint: "web tech" },
  { name: "Twenty Four Interactive", phone: "0702 387949", email: "info@24i.co.ke", website: "#", hint: "interactive media" },
  { name: "Web Host Africa Ltd", phone: "0733 734324", email: "info@webhostafrica.net", website: "#", hint: "africa web" },
  { name: "WebRunner Ltd", phone: "0719 297909", email: "sales@webrunner.co.ke", website: "#", hint: "runner logo" },
  { name: "Diene Vorliebe Limited", phone: "020 2100824", email: "sales@samnet.co.ke", website: "#", hint: "tech company" },
  { name: "Crystal Systems Solutions", phone: "0721 269 715", email: "info@crystalsystemssolutions.com", website: "#", hint: "crystal logo" },
  { name: "Acarina Ltd", phone: "0110058911", email: "admin@africawebcloud.co.ke", website: "#", hint: "web cloud" },
  { name: "Ace Solution Africa Ltd", phone: "+254-721-585-355", email: "sales@acesolutionafrica.com", website: "#", hint: "ace logo" },
  { name: "Africa Blue Webs", phone: "0725874816", email: "info@africabluewebs.co.ke", website: "#", hint: "blue web" },
  { name: "Afriq Network Solutions Ltd", phone: "0207904100", email: "info@afriqnetworks.co.ke", website: "#", hint: "network logo" },
  { name: "Almond Cyber Solutions", phone: "0722916530", email: "domains@almond.co.ke", website: "#", hint: "cyber security" },
  { name: "Alpha Savvy Logistics LTD", phone: "0719418318", email: "support@hostjaer.com", website: "#", hint: "logistics logo" },
  { name: "Amocsoft Solutions", phone: "+254725864223", email: "support@amocsoft.com", website: "#", hint: "software solutions" },
  { name: "Aplin", phone: "0700 166 166", email: "billing@aplin.co.ke", website: "#", hint: "tech logo" },
  { name: "Big Host Africa", phone: "0721726655", email: "domains@bighostweb.com", website: "#", hint: "big host" },
  { name: "Bitsimba Telecommunications", phone: "0796 112 555", email: "info@bitsimba.com", website: "#", hint: "telecom logo" },
  { name: "Bizz-tech Solutions Limited", phone: "0724 114 357", email: "info@bizztech.co.ke", website: "#", hint: "business tech" },
  { name: "Chika Ltd", phone: "+254204409688", email: "domains@chika.co.ke", website: "#", hint: "tech company" },
  { name: "Clinet Company Ltd", phone: "+254710 244 502", email: "info@clinetonline.com", website: "#", hint: "networking logo" },
  { name: "CompEdge Solutions Ltd", phone: "+254 20 4441970", email: "info@compedgesolutions.co.ke", website: "#", hint: "solutions logo" },
  { name: "Crystal Technologies Ltd", phone: "0729047915", email: "support@crystaltech.co.ke", website: "#", hint: "crystal tech" },
  { name: "Digital Webframe Solutions", phone: "0799 171 612", email: "info@digitalwebframe.com", website: "#", hint: "digital frame" },
  { name: "Dimension Data Solutions", phone: "020 3600200", email: ".ke@dimensiondata.com", website: "#", hint: "data solutions" },
  { name: "Directcore Technologies Ltd", phone: "+254 020 232 5599", email: "domains@directcore.com", website: "#", hint: "core tech" },
  { name: "Dotsavvy Limited", phone: "+254 20 8077108", email: "info@dotsavvyafrica.com", website: "#", hint: "savvy logo" },
  { name: "eazywiz web solutions", phone: "0722507995", email: "info@eazywiz.com", website: "#", hint: "web wizard" },
  { name: "Ecobiz", phone: "0717775775", email: "info@ecobiz.co.ke", website: "#", hint: "eco business" },
  { name: "Eldama Technologies Ltd", phone: "020 3653000", email: "domains@eldama.co.ke", website: "#", hint: "tech logo" },
  { name: "Eldohub Innovations", phone: "0724077237", email: "mchepkemoi@eldohub.co.ke", website: "#", hint: "innovation hub" },
  { name: "Etiqet Solutions Limited", phone: "020 2227100", email: "domains@dewcis.com", website: "#", hint: "etiquette logo" },
  { name: "Event Crest Limited", phone: "020 24 000 25", email: "one@konzacloud.com", website: "#", hint: "event logo" },
  { name: "Flex Solutions", phone: "0714 495 840", email: "info@flexsolutions.co.ke", website: "#", hint: "flexible solutions" },
  { name: "Gamma Solutions", phone: "0701311074", email: "support@webaukhosting.net", website: "#", hint: "gamma logo" },
  { name: "Geda Limited", phone: "020 353 6000", email: "info@geda.co.ke", website: "#", hint: "tech company" },
  { name: "Ghalas Technology Ltd", phone: "+254 0717180001", email: "support@ghalas.com", website: "https://www.ghalas.com/", hint: "ghalas tech" },
  { name: "Globefinity ITS LTD", phone: "+254 020 2731928", email: "support@globefinity.net", website: "#", hint: "global tech" },
  { name: "Handy Creations Holdings Limited", phone: "0721573314", email: "obtinega@gmail.com", website: "#", hint: "creations logo" },
  { name: "Hasoft Kenya", phone: "0202026240", email: "wanyonyi@hasoftkenya.com", website: "#", hint: "software kenya" },
  { name: "Homeboyz Entertainment", phone: "020 269 2394", email: "info@homeboyz.co.ke", website: "#", hint: "entertainment logo" },
  { name: "Host Masters", phone: "0724 668 603", email: "info@hostmasters.co.ke", website: "#", hint: "master hosting" },
  { name: "Host Pro", phone: "+254794698217", email: "info@hostpro.co.ke", website: "#", hint: "pro hosting" },
  { name: "ICT Authority", phone: "+254 20 2211960", email: "websupport@icta.go.ke", website: "#", hint: "icta logo" },
  { name: "Ignite Africa Limited", phone: "0722 574 182", email: "info@igniteafrica.co.ke", website: "#", hint: "ignite logo" },
  { name: "Imagine Brands Limited", phone: "+254 735 11 55 00", email: "info@imagine.co.ke", website: "#", hint: "imagine logo" },
  { name: "Infomage Solutions Limited", phone: "+254714 090 834", email: "info@infomage.co.ke", website: "#", hint: "info solutions" },
  { name: "Interactive Technology Ltd", phone: "0722 695000", email: "info@itlweb.com", website: "#", hint: "interactive tech" },
  { name: "Intrepid Data Systems", phone: "020 2430424", email: "info@intrepid.co.ke", website: "https://intrepid.co.ke/", hint: "data systems" },
  { name: "IT Experts Solutions Ltd", phone: "+254718028214", email: "admin@itexperts.co.ke", website: "#", hint: "it experts" },
  { name: "J.S Engine Limited", phone: "0725990660", email: "info@jsengine.net", website: "#", hint: "engine logo" },
  { name: "Jamii Telecommunications", phone: "0711 054 100", email: "info@jtl.co.ke", website: "#", hint: "jamii telecom" },
  { name: "Kemnet Technologies", phone: "020 4409887", email: "hello@kemnet.co.ke", website: "#", hint: "kemnet logo" },
  { name: "Kenya Education Network", phone: "0732150500", email: "info@kenet.or.ke", website: "#", hint: "kenet logo" },
  { name: "Konza Technopolis", phone: "+254 20 434 3014", email: "cloud@konza.go.ke", website: "#", hint: "konza logo" },
  { name: "Legibra Solutions Limited", phone: "+254710 135 135", email: "info@legibra.com", website: "#", hint: "legibra logo" },
  { name: "Lian Services Limited", phone: "0797326164", email: "info@lianservices.com", website: "#", hint: "lian logo" },
  { name: "Logistik Creations", phone: "0722658097", email: "domains@cngs.com", website: "#", hint: "logistics logo" },
  { name: "MCS Ltd", phone: "0727457-0000", email: "info@mcs.co.ke", website: "#", hint: "mcs logo" },
  { name: "Massive Dynamic", phone: "1-877-867-7396", email: "techsupport@massivedynamic.com", website: "#", hint: "dynamic logo" },
  { name: "Mawingu Host Limited", phone: "+254716503084", email: "wilson@mawinguhost.co.ke", website: "#", hint: "mawingu logo" },
  { name: "Mbitrix Technologies LTD", phone: "0711994555", email: "stephen@mbitrix.com", website: "#", hint: "mbitrix logo" },
  { name: "Messaging Labs Africa Solutions", phone: "020-3569132", email: "info@ke.msgafrica.com", website: "#", hint: "messaging africa" },
  { name: "Millenia Limited", phone: "0722540854", email: "info@millenia.co.ke", website: "#", hint: "millenia logo" },
  { name: "MTN Business", phone: "0722205152", email: "info@mtnbusiness.co.ke", website: "#", hint: "mtn logo" },
  { name: "MyISP Limited", phone: "020 3569999", email: "info@myisp.co.ke", website: "#", hint: "isp logo" },
  { name: "NdovuCloud Technologies Ltd", phone: "+254 722 469 025", email: "help@ndovucloud.com", website: "#", hint: "ndovu cloud" },
  { name: "Palm Online Systems ltd", phone: "020 804/2760", email: "info@palm.co.ke", website: "#", hint: "palm logo" },
  { name: "Peak and Dale Solutions", phone: "(020) 2216522", email: "info@peakanddale.com", website: "#", hint: "peak dale" },
  { name: "Pwani Telecomms Ltd", phone: "+254 725777077", email: "sales@ikenya.com", website: "#", hint: "pwani telecom" },
  { name: "Pwani Web Hosting Solutions", phone: "0727 595 660", email: "support@pwaniweb.com", website: "#", hint: "pwani web" },
  { name: "Raysco Web and Net Sln Ltd", phone: "0711 450 450", email: "support@rayscoweb.com", website: "#", hint: "raysco logo" },
  { name: "Ripplewave", phone: "0722800580", email: "mail@ripplewave.com", website: "#", hint: "ripple wave" },
  { name: "ROUTE AFRICA", phone: "+255 763 191581", email: "domains@routeafrica.net", website: "#", hint: "route africa" },
  { name: "SawaSawa.com Limited", phone: "0722 911411", email: "info@sawasawa.co.ke", website: "#", hint: "sawasawa logo" },
  { name: "Secunets Technologies Limited", phone: "+254788827759", email: "info@secunets.com", website: "#", hint: "secunets logo" },
  { name: "Shine Web Technologies Ltd", phone: "0727935106", email: "info@shineweb.co.ke", website: "#", hint: "shine web" },
  { name: "Simbanet Com Ltd", phone: "+254 020 2804030", email: "registry@simbanet.co.ke", website: "#", hint: "simbanet logo" },
  { name: "Sino Soft Limited", phone: "+254105503412", email: "admin@sinosoft.guru", website: "#", hint: "sino soft" },
  { name: "Sky Webhost Africa Ltd", phone: "0727 462 320", email: "info@skyhost.co.ke", website: "#", hint: "sky webhost" },
  { name: "Slash Dot Labs", phone: "0729563128", email: "info@slashdotlabs.com", website: "#", hint: "slash dot" },
  { name: "Softlink Chain LTD", phone: "0721 454 237", email: "admin@softlink.co.ke", website: "#", hint: "softlink logo" },
  { name: "Softlink Options Ltd", phone: "020-3559522", email: "info@softlinkoptions.com", website: "#", hint: "softlink options" },
  { name: "Source Code Limited", phone: "+254 0735 004000", email: "info@sourcecode.co.ke", website: "#", hint: "source code" },
  { name: "Sumatran Technologies Sln", phone: "254208121194", email: "info@sumatrantechnologies.com", website: "#", hint: "sumatran tech" },
  { name: "Suntech Business Sln Ltd", phone: "0722 700 680", email: "info@suntech-solutions.co.ke", website: "#", hint: "suntech logo" },
  { name: "TechDirect Solutions Ltd", phone: "0208016868", email: "info@techdirect.co.ke", website: "#", hint: "tech direct" },
  { name: "Techtyga Solutions Limited", phone: "+254726250763", email: "techtygasolutions@gmail.com", website: "#", hint: "techtyga logo" },
  { name: "Telkom Kenya Limited", phone: "020 4600200", email: "customercare@telkom.co.ke", website: "#", hint: "telkom logo" },
  { name: "Web Hosting Experts Ltd", phone: "0718028214", email: "admin@webhostexperts.co.ke", website: "#", hint: "web hosting" },
  { name: "Web Solutions Kenya", phone: "0727352013 / 0711733040", email: "info@websolutions.co.ke", website: "#", hint: "web solutions" },
  { name: "Web Tribe Limited", phone: "+254 724 711 784", email: "ianmoses@webtribe.co.ke", website: "#", hint: "web tribe" },
  { name: "Webcom Kenya", phone: "0727352013 / 0711733040", email: "info@webcomkenya.com", website: "#", hint: "webcom kenya" },
  { name: "Webline Technologies Ltd", phone: "0722633540", email: "info@webline.co.ke", website: "#", hint: "webline tech" },
  { name: "Whogohost Limited", phone: "23470022332233", email: "support@whogohost.com", website: "#", hint: "whogohost" },
  { name: "Xcobean Systems Limited", phone: "0702 324 532", email: "info@xcobean.com", website: "#", hint: "xcobean systems" },
  { name: "Xtranet Communications", phone: "0202490999", email: "admin@xtranet.co.ke", website: "#", hint: "xtranet" },
  { name: "Zamoya Media Ltd", phone: "+254 725 385 168", email: "info@zamoya.com", website: "#", hint: "zamoya media" },
  { name: "Aja Limited", phone: "+254 776 526 101", email: "info@ajibu.com", website: "#", hint: "aja limited" },
  { name: "AirTouch Connections Ltd", phone: "+254 723 403 466", email: "aclsupport@airtouch.co.ke", website: "#", hint: "airtouch" },
  { name: "Africa 118", phone: "+254 729 905 156", email: "info@africa118.com", website: "#", hint: "africa 118" },
  { name: "DeepAfrica Co Ltd", phone: "0712 500 500", email: "support@deepafrica.com", website: "#", hint: "deep africa" },
  { name: "Global Internet Fortunes", phone: "0705352288", email: "admin@globalfortunesinternet.com", website: "#", hint: "internet fortunes" },
];

export default function LicensedRegistrarsPage() {
  const [filter, setFilter] = useState("");

  const filteredRegistrars = registrars.filter((registrar) =>
    registrar.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="flex-1">
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-[-2]">
          <video
            src="/videos/bluepaint.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-[-1]"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 animate-fade-in-up">
            <div className="flex flex-col items-center justify-center space-y-6">
                 <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Licensed .KE Registrars
                </h1>
                <p className="max-w-[700px] text-lg text-white/90 md:text-xl">
                    Choose from our network of accredited partners to register and manage your .KE domain.
                </p>
                <div className="my-8 w-full max-w-2xl">
                    <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" />
                    <Input
                        placeholder="Search for a registrar..."
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="pl-10 text-base h-12 bg-white/20 border-white/30 placeholder:text-white/70 focus:ring-primary"
                    />
                    </div>
                </div>
            </div>
        </div>
      </section>
    
      <div className="bg-secondary">
        <div className="container mx-auto max-w-7xl py-12 px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRegistrars.map((registrar) => (
              <Card key={registrar.name} className="flex flex-col">
                <CardHeader className="items-center">
                  <div className="relative w-40 h-20 mb-4">
                      <Image src="https://placehold.co/200x100.png" alt={`${registrar.name} Logo`} layout="fill" objectFit="contain" data-ai-hint={registrar.hint}/>
                  </div>
                  <CardTitle className="text-center text-xl">{registrar.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1 text-green-600 pt-2">
                    <CheckCircle className="h-4 w-4" /> Accredited Registrar
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-2 text-sm text-center text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>{registrar.phone}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                      <Mail className="h-4 w-4" />
                      <a href={`mailto:${registrar.email}`} className="hover:underline">{registrar.email}</a>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={registrar.website} target="_blank">
                      Visit Website
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          {filteredRegistrars.length === 0 && (
            <div className="text-center p-8 text-muted-foreground">
              No registrars found matching your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
