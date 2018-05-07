const constants = {
    phoneNumber: '0161 870 2000',
    homeBoxes: 
    [{"id":"1","title":"NEED","content":"We look at your business as you would. Proactive, strategic partners, we tap into the challenges and needs that drive your business.\r\n\r\n","order":"1"}, {"id":"2","title":"CREATIVE","content":"Any campaign worth its salt has a story, but every story starts somewhere. Our focus on need fosters powerful and engaging campaigns.\r\n\r\n","order":"2"}, {"id":"3","title":"STRATEGY","content":"We always look at the bigger picture, and help you to do the same. We plug in the right experts to create and deliver a campaign strategy. ","order":"3"}, {"id":"4","title":"LEAN","content":"We keep an eye on the horizon of your next campaign. By analysing the results of one video, we take those insights onto the next.\r\n\r\n","order":"4"}],
    portfolioCategories: {
        "1": { 
            "key": "animation",
            "name": "Animation"
        },
        "2": {
            "key": "live-action",
            "name": "Live Action"
        }
    },
    portfolio: [{"id":"1","category_id":"2","title":"ANTHONY JOSHUA x RDX","thumbnail":"Joshua_Icon_1.jpg","main_video":"145311093","services":"TV Spot \r\nViral Video \r\nCreed Trailer \r\nEdit","client":"RDX Sports","main_title":"","main_description":"RDX Sports ambassador, Anthony Joshua \u2013 Olympic Gold Medalist, Commonwealth, British Heavyweight Champion and IBF World Heavyweight Champion."}, {"id":"2","category_id":"1","title":"BeGlam","thumbnail":"beglam-Icon1.jpg","main_video":"167280243","services":"","client":"BeGlam","main_title":"","main_description":""}, {"id":"3","category_id":"2","title":"The LADBible","thumbnail":"Icon_grass.jpg","main_video":"147480955","services":"","client":"The LADBible","main_title":"APP LAUNCH INTO SPACE","main_description":"Russia sent a dog to space. NASA sent a monkey to space. Red Bull dropped a man from space. But we at The LADBible have sent our app into space."}, {"id":"4","category_id":"1","title":"What is \"The Cloud\"","thumbnail":"icon3.png","main_video":"221872059","services":"","client":"Zen Internet","main_title":"","main_description":""}, {"id":"5","category_id":"1","title":"GSS \u2013 General Purpose Canine Teams","thumbnail":"Icons_protection.jpg","main_video":"178222244","services":"Animation","client":"Global Support Services","main_title":"GENERAL PURPOSE CANINE TEAMS","main_description":"Compared to a security guard \u2013 a canine can smell up to 100,000 times better, has better night vision, and can hear up to four times further away, at a higher and wider range of frequencies."}, {"id":"6","category_id":"2","title":"GSS \u2013 Career & Companionship","thumbnail":"Icons_Dog_GSS.jpg","main_video":"173881067","services":"Interactive Video\r\nOriginal Innovative Concept\r\nFilm Production\r\nCoding & User Testing","client":"Global Support Services","main_title":"GSS CANINE & HANDLER - RECRUITMENT CAMPAIGN","main_description":"This is an edited version of the live interactive video, go and watch the interactive version <a href=\"http:\/\/www.global-support.org\/video\/\" target=\"_blank\" rel=\"noopener noreferrer\">HERE.<\/a>."}, {"id":"7","category_id":"2","title":"Mini Mantas","thumbnail":"icons_mantas.jpg","main_video":"178167704","services":"Live Action","client":"Mini Mantas","main_title":"PRODUCT LAUNCH","main_description":"Mani, your friend in the water. A unique, British made swimming aid. Mani gets children in the correct body position from the very start of the swimming journey."}, {"id":"8","category_id":"1","title":"BUPA","thumbnail":"Bupa_Icon.jpg","main_video":"143033749","services":"Animation\r\nIllustration\r\nOriginal Concept","client":"BUPA","main_title":"BUPA - SELF PAY","main_description":"Final output: \r\n10 Banner Ads\r\n2 Animations"}, {"id":"9","category_id":"1","title":"GSS \u2013 The History & Biology of Canine Detection","thumbnail":"dog-profile-Icon.jpg","main_video":"208505272","services":"","client":"Global Support Services","main_title":"THE HISTORY AND BIOLOGY OF CANINE DETECTION","main_description":"The US spent over $19 Billion attempting to build a robot nose to outstrip a dog\u2019s scenting abilities, they came to one conclusion: there was no beating dogs!"}, {"id":"10","category_id":"1","title":"Immigration Advice Service","thumbnail":"ICON_entrance_IAS.jpg","main_video":"129268152","services":"Animation\r\nRotoscoping\r\nLive Action","client":"Immigration Advice Service","main_title":"MIXED MEDIUM BRAND VIDEO","main_description":""}, {"id":"11","category_id":"2","title":"GunnerCooke","thumbnail":"Gunnercooke_simple_icons.jpg","main_video":"182392398","services":"","client":"GunnerCooke","main_title":"GUNNERCOOKE - BRAND VIDEO","main_description":""}, {"id":"12","category_id":"1","title":"Mettler Toledo","thumbnail":"icon_Mettler_toledo.jpg","main_video":"138994855","services":"Animation","client":"Mettler Toledo","main_title":"PRODUCT EFFECT ANIMATION","main_description":"Due to a phenomenon called Product Effect, finding the smallest metal contaminants is a challenge for many food producers. The solution to this is a Profile Advantage metal detection system."}, {"id":"13","category_id":"1","title":"GroupCam","thumbnail":"icon_groupCam.jpg","main_video":"114018208","services":"Explainer Animation\r\nIllustration","client":"GroupCam","main_title":"GROUPCAM - SHARE YOUR PHOTOS","main_description":"Why share photos, when you can share cameras?"}, {"id":"14","category_id":"1","title":"ALUPRO","thumbnail":"ECC_Icon.jpg","main_video":"131874470","services":"","client":"The Aluminium Packaging Recycling Organisation","main_title":"THE LONELY BOTTLE TOP","main_description":"A story of endless possibilities\u2026"}, {"id":"15","category_id":"1","title":"GunnerCooke \u2013 Brand Animation","thumbnail":"G-Kicon1.jpg","main_video":"131874470","services":"Animation","client":"GunnerCooke","main_title":"A DIFFERENT LAW FIRM","main_description":""}],

    team: 
    [{"id":"1","first_name":"Matthew","last_name":null,"profile_picture":"BeardedMatthew1.jpg","job_position":"Creative Director","order":"3"}, {"id":"2","first_name":"Florin","last_name":null,"profile_picture":"BeardedFlorin1.jpg","job_position":"Art Director, Animator, Illustrator","order":"2"}, {"id":"3","first_name":"Samson","last_name":null,"profile_picture":"Bearded_Samson_2.jpg","job_position":"Creative Director","order":"1"}, {"id":"4","first_name":"Joe","last_name":null,"profile_picture":"BeardedJoe1.jpg","job_position":"Business Strategy & Outreach","order":"4"}],
    
    testimonials: 
    [{"id":"1","portfolio_id":"5","text":"Our videos to date have been amazingly well received by our clients and associates. Each has had the effect of differentiating us in our market and creates the impression of an innovative, thought-leading, and supportive provider of specialist security services \u2013 exactly what we set out to do!\u2026 Each video keeps getting better than the last one!","signature":"Kevin Wootton \/\/ Business Development Manager, Global Support Services"}, {"id":"2","portfolio_id":"6","text":"The team has an uncanny knack of de-mystifying the whole creative\/production process. The way they work with us means we feel involved and in control at every stage of that process.","signature":"Kevin Wootton \/\/ Business Development Manager, Global Support Services"}, {"id":"3","portfolio_id":"7","text":"This has been a unique and truly memorable experience within my 20 years in business. There is a confidence generated by the knowledge within the team and their commitment in making films that as you say \u2018people want to watch\u2019. A good story is only made of words unless you have the ability to translate its true meaning into an engaging film. That is what has happened for me in this experience\u2026 Not only did you get what I was trying to achieve you could feel a real sense of their emotional engagement in the project. That mix is quite a rare in my experience.","signature":"Michael Thomas \/\/ Founder, Mini Mantas"}, {"id":"4","portfolio_id":"8","text":"The overall campaign was very strong. The 30 second version proved by far the most engaging and the extended animation gathered over 55,000 views on Youtube, essentially going viral!","signature":"Lee Duong \/\/ Customer Journey Owner, Bupa \u2018Self Pay\u2019"}, {"id":"5","portfolio_id":"9","text":"Bearded Fellows are really open in the way they operate, full of great ideas, as you\u2019d hope, and extremely adept at simplifying the complicated. Our two-way understanding is always the basis for a very strong relationship, which we certainly have with the team. Oh, and they bring the most amazing coffee to our meetings!","signature":"Kevin Wootton \/\/ Business Development Manager, Global Support Services"}, {"id":"6","portfolio_id":"11","text":"Just wanted to say a huge thank you for the amazing videos you produced! Everyone commented on the standard and creativity of them, exactly what we\u2019d hoped for!","signature":"Laura Jordan \/\/ Director, GunnerCooke"}, {"id":"7","portfolio_id":"12","text":"The care and attention they showed in understanding our business, our brand guidelines, and our target audience. They asked the right questions, and made suggestions backed up by facts and experience. Matthew and every member of the team that we met was friendly, personable and very knowledgeable. Their work spoke for themselves, and the positive feedback we received from internal and external stakeholders about our first project with Bearded Fellows encouraged us to make them our supplier of choice for similar projects in the future. We are currently in the process of finalising our 4th project with them.","signature":"Leanne Peasnall \/\/ Head of Marketing, Mettler Toledo"}, {"id":"8","portfolio_id":"15","text":"Just wanted to say a huge thank you for your help\u2026 and for the amazing videos you produced! Everyone commented on the standard and creativity of them, exactly what we\u2019d hoped for! Thanks again!","signature":"Laura Jordan \/\/ Director, GunnerCooke"}, {"id":"9","portfolio_id":"13","text":"Bearded Fellows are experts in animation and whilst working with them, I also realised they are experts in the message you want from your animation. They work and think like they are from your company. They understand our company and the message we want to reach our customers.","signature":"Poul Carmes \/\/ Co-Founder, GroupCam"}],    

    portfolioSections: [{
        "id": "1",
        "portfolio_id": "4",
        "title": "I. Challenge",
        "content": "\u201cThe Cloud\u201d has become ubiquitous in our modern society, but if you asked someone what it actually is, could they tell you?  This question often gets in the way of businesses taking their first major step into the digital world. Zen Internet needed  to demystify the cloud and inspire companies to take that first leap.",
        "image": "4_1_servers.gif",
        "image-align": "right",
        "order": "1"
    }, {
        "id": "2",
        "portfolio_id": "4",
        "title": "II. Solution",
        "content": "Our solution was to communicate in a clear and succinct way the power that the cloud can bring a business whilst highlighting the key benefits, rather than delve into detail on the technical definition of it. This meant that Zen Internet could target decision makers in businesses such as CEO\u2019s with no technical knowledge, rather than having to rely on an internal head of IT.",
        "image": "4_2_cloud.gif",
        "image-align": "left",
        "order": "2"
    }, {
        "id": "3",
        "portfolio_id": "4",
        "title": "",
        "content": "",
        "image": "4_3_tree.gif",
        "image-align": "center",
        "order": "3"
    }, {
        "id": "4",
        "portfolio_id": "3",
        "title": "I. Challenge",
        "content": "With the launch of their app approaching, the founders of The LADBible asked for our support in delivering a campaign across all their social media channels. The aim? To drive as many of their current followers to download the app and start using it.\r\n\r\nThe problem they faced was that up until this point The LADBible had built their platform on the sharing of other people\u2019s content, but now for the first time they needed to make their own\u2026 This raised a lot of questions with very few immediate answers.\r\n\r\nIt was clear that it was time The LADBible explored its brand and found its voice.",
        "image": "3_1_baloon.gif",
        "image-align": "left",
        "order": "1"
    }, {
        "id": "5",
        "portfolio_id": "3",
        "title": "II. Solution",
        "content": "We researched and tested different styles in the run up to the launch: commercial, short social content, and docu-style. Based on the engagement and feedback each style received, we recognised the strongest style for the brand was docu-film led by a brand rep\u2026 a lad!\r\n\r\nWe devised a piece of hero content for the campaign to surround, which focused on the launch of the app into space! We took a presenter into the Pennines, strapped an iPhone to a helium balloon with the app running and launched it into space. The app launch was a big moment for the The LADBible and it was something they wanted share with all their followers! The audience engagement focused on the question of whether the launch was real or fake\u2026",
        "image": "3_2_spacyiphone.gif",
        "image-align": "right",
        "order": "2"
    }, {
        "id": "6",
        "portfolio_id": "3",
        "title": "III. Impact",
        "content": "The LADBible app rocketed to Number 1 in the App Store within 24 hours! In the first week the video received over 2,000,000 views across all of their social media channels, and the style of video chosen has gone on to dictate the brands current and ongoing video content. The campaign shifted The LADBible from a large online social media platform to the biggest media platform in Europe!\r\n\r\nThe success of the campaign was recognised at the Prolific North Awards 2016 where Bearded Fellows went on to win \u2018Video of the Year\u2019.",
        "image": "3_3_iphonedropped.gif",
        "image-align": "left",
        "order": "3"
    }, {
        "id": "7",
        "portfolio_id": "2",
        "title": "I. Challenge",
        "content": "BeGlam were in the process of developing an app that would connect hair stylists and make-up artists with customers in need of their services. However, before they could take their product to market, they needed to onboard service providers.",
        "image": "2_1_iphoneinhand.gif",
        "image-align": "right",
        "order": "1"
    }, {
        "id": "8",
        "portfolio_id": "2",
        "title": "II. Solution",
        "content": "We produced two original animations: one to support the onboarding of service providers, and another to drive app downloads by users. The design and illustrations were consistent across both animations, and were carried over to the website, social media channels and relevant landing pages.",
        "image": "",
        "image-align": "left",
        "order": "0"
    }, {
        "id": "9",
        "portfolio_id": "2",
        "title": "III. Impact",
        "content": "Following a successful launch, the video was shortlisted for Best App at The Talk Of Manchester Awards. The art direction of production also allowed BeGlam to find a consistent style and tone for their branding and marketing.",
        "image": "vimeo_163679466",
        "image-align": "right",
        "order": "3"
    }, {
        "id": "10",
        "portfolio_id": "1",
        "title": "I. Challenge",
        "content": "RDX Sports wanted to create a buzz around their newest ambassador, Anthony Joshua, in the run-up to his Heavyweight Title fight. They approached us to produce a TV spot, alongside a piece of content for their online channels with the capacity to go viral.",
        "image": "1_1_box.jpg",
        "image-align": "left",
        "order": "0"
    }, {
        "id": "11",
        "portfolio_id": "1",
        "title": "II. Solution",
        "content": "Being fans of boxing we wanted to create a TV spot that would resonate with fighters.\r\n\r\nIt focused on the core elements of boxing technique; the learning of a combination that every boxer purchasing their products could relate to. Anthony\u2019s power is his number one asset so we focused on making sure his fists shook the viewer.\r\n\r\nThe viral video once again revolved around Anthony\u2019s strength. However, this time, it showcased his well-documented humble and positive spirit, an angle that we knew would capture people\u2019s attention.",
        "image": "vimeo_156462268",
        "image-align": "right",
        "order": "2"
    }, {
        "id": "12",
        "portfolio_id": "1",
        "title": "III. Impact",
        "content": "Launched on NBC sports and at the Creed movie premiere in Las Vegas, the TV spot generated massive exposure for RDX Sports and Anthony Joshua before the fight.\r\n\r\nOnce released, the viral video gained over 1 million views across social channels. It was also broadcasted on five major news channels, including The Mirror, ITV and Yahoo Sports.\r\n\r\nThrough this project we were also approached by RDX to create a specialised trailer for the Creed movie, in collaboration with Warner Brothers, for UK and US audiences.",
        "image": "vimeo_144019087",
        "image-align": "left",
        "order": "3"
    }, {
        "id": "13",
        "portfolio_id": "5",
        "title": "I. Challenge",
        "content": "Skilled canine handlers can significantly reduce the cost of security, while improving effectiveness. And yet, during our \u2018business needs\u2019 session with GSS, we found that many leads didn\u2019t convert because they felt more comfortable using conventional security guards.",
        "image": "5_1_runningscared.gif",
        "image-align": "right",
        "order": "1"
    }, {
        "id": "14",
        "portfolio_id": "5",
        "title": "II. Solution",
        "content": "We decided that an animation would be the perfect way to communicate how the natural ability of a canine, coupled with a handler, could benefit a company\u2019s security requirements. The aims were twofold: enrich the sales process, whilst also educating the client.\r\n\r\nCompetitor analysis revealed that no other security company was producing high quality educational video content like this. So we made it our mission to produce something that visually distinguished GSS in the sector. To do this, we combined beautifully illustrated landscapes in 2D with elements of frame-by-frame animation.",
        "image": "5_2_protection.gif",
        "image-align": "left",
        "order": "2"
    }, {
        "id": "15",
        "portfolio_id": "5",
        "title": "III. Impact",
        "content": "The animation has been extremely effective in securing new clients, as it separates GSS from its competitors and drives brand engagement. By clearly communicating the powerful, cost-effective impact of deploying a canine handler team, the video has built brand trust and loyalty.",
        "image": "5_3_targetdog.gif",
        "image-align": "right",
        "order": "3"
    }, {
        "id": "16",
        "portfolio_id": "6",
        "title": "I. Challenge",
        "content": "GSS were facing a period of high growth and had a series of operational, internal, and marketing challenges that they needed a creative partner to support them on; enter Bearded Fellows.\r\n\r\nStep 1. Run a Business Exploration session and review the company\u2019s growth strategy.\r\n\r\nStep 2. Highlight the major challenges facing the company and prioritise them.\r\n\r\nStep 3. Plan a 12 month video content strategy and highlight the immediate priority.\r\n\r\nIt was decided that a campaign to build the GSS brand, whilst driving recruitment, needed to be the focus of the first project.",
        "image": "6_1_dogwalking.gif",
        "image-align": "left",
        "order": "1"
    }, {
        "id": "17",
        "portfolio_id": "6",
        "title": "II. Solution",
        "content": "Our research told us that the campaign target audience would mostly comprise of ex-military personnel looking for a new career. We decided to form a story around the personal experiences of the GSS staff as inspiration for the video\u2019s narrative.\r\n\r\nWe produced an interactive dual narrative video that tells the story of an ex-military serviceman, a canine, and their journey. The viewer is able to switch between each video track by pressing the G key.\r\n\r\nThe interactive film portrayed the deep relationship and understanding a handler and their canine have, whilst engaging the viewer to actively interact with the video. It was essential that the video was thoughtful and honest about the challenges that ex-military personnel face when re-entering society.\r\n\r\n",
        "image": "6_2_dogrunning.gif",
        "image-align": "right",
        "order": "2"
    }, {
        "id": "18",
        "portfolio_id": "6",
        "title": "III. Impact",
        "content": "The company\u2019s recruitment rocketed, with the campaign helping to produce a 300% increase in quality recruitment enquiries as well save the business in the region \u00a330,000 in recruitment fees. The video was universally praised by clients, staff and partners giving GSS confidence to grow their client portfolio as well as expand provisions to their current clients.\r\n\r\nGSS Partnered with military charities to push the campaign using the hashtag #heyareyouok?. The campaign was focused on quality over quantity of engagement, focusing on small niche demographic who are usually hard to reach, something which we achieved.\r\n\r\nThe campaign strengthened the staff\u2019s connection to the brand, from top level management, to the handlers off site and on the ground.",
        "image": "6_3_doghappy.gif",
        "image-align": "left",
        "order": "3"
    }, {
        "id": "19",
        "portfolio_id": "7",
        "title": "I. Challenge",
        "content": "Having spent three years designing Mani, an innovative swimming aid, Mini Mantas were ready to launch their product. To do this, they wanted to produce an explainer video that would outline how it helps children learn to swim. However, we challenged whether this would be the best way to establish the brand.",
        "image": "7_1_feetinsand.gif",
        "image-align": "right",
        "order": "1"
    }, {
        "id": "20",
        "portfolio_id": "7",
        "title": "II. Solution",
        "content": "Further research confirmed our premonitions: Mani is highly intuitive and effective, and product testing revealed that parents and children immediately understood the benefits. We knew that customers enjoyed the product; the challenge would be to build brand intrigue and purchase intent.\r\n\r\nPeople buy people, and we felt that focusing on the motivation and hard work of founder Michael would make the brand video authentic and personal. Our video drew out the highly emotive route of his own inspiration \u2013 why he designed Mani in the first place, and the legacy he hopes to leave.",
        "image": "vimeo_216832407",
        "image-align": "left",
        "order": "2"
    }, {
        "id": "21",
        "portfolio_id": "7",
        "title": "III. Impact",
        "content": "By putting the spotlight on the story behind Mini Mantas, we helped to build brand trust and loyalty, and inspire parents to go out and buy their swimming aid.",
        "image": "7_3_minimantas.gif",
        "image-align": "right",
        "order": "3"
    }, {
        "id": "22",
        "portfolio_id": "8",
        "title": "I. Challenge",
        "content": "Bupa\u2019s New Ventures team needed help promoting and testing their new online service, Bupa Self Pay. Self Pay helps members and non members access physiotherapy services at the click of a button. The team needed to run a campaign that would test whether or not the service would be picked up and used by the public.\r\n\r\nStep 1. Run a session to review their marketing strategy.\r\n\r\nStep 2. Highlight the key aims and ambitions of the campaign.\r\n\r\nStep 3. Devise a creative concept for the campaign.\r\n\r\n",
        "image": "8_1_browsing.gif",
        "image-align": "right",
        "order": "1"
    }, {
        "id": "23",
        "portfolio_id": "8",
        "title": "II. Solution",
        "content": "Whilst we were working with the New Ventures team it was agreed that a short engaging explainer video would be the best way to introduce and explain the platform.\r\n\r\nIn order to find the demographic for the new service, the campaign was to be delivered over Facebook sponsored ads, interest targeting on YouTube, and animated banner ads.\r\n\r\nThe animation was designed to be adaptable and easy to deliver across multiple platforms in order to achieve strong results quickly.\r\n\r\nWe produced one 45 second animation, one 10 second social media edit, and five banner ads.",
        "image": "8_2_routine.gif",
        "image-align": "left",
        "order": "2"
    }, {
        "id": "24",
        "portfolio_id": "8",
        "title": "III. Impact",
        "content": "The animation has had over 55,000 organic views since being released and has helped to sell to further service providers as well as onboard more users. Achieving clickthrough rates above the top end U.K. benchmarks of 20%, meaning we over delivered on views by 68%.\r\n\r\nBupa Self Pay has now been rebranded and relaunched as Bupa on Demand. The site has been migrated over to Bupa\u2019s customer facing website and will initially offer five new services with more to come.\r\n\r\nOver the course of 2017 we will be working with Bupa to help shape the new campaign for Bupa on Demand.",
        "image": "8_3_playingkid.gif",
        "image-align": "right",
        "order": "3"
    }, {
        "id": "25",
        "portfolio_id": "9",
        "title": "I. Challenge",
        "content": "Skilled canine handlers can significantly reduce the cost of security, while improving effectiveness. And yet, during our \u2018business needs\u2019 session with GSS, we found that many leads didn\u2019t convert because they felt more comfortable using conventional security guards.",
        "image": "9_1_dog.gif",
        "image-align": "right",
        "order": "2"
    }, {
        "id": "26",
        "portfolio_id": "9",
        "title": "II. Solution",
        "content": "Competitor analysis revealed that no other security company was producing high quality educational video content like this. So we made it our mission to produce something that visually distinguished GSS in the sector. To do this, we combined beautifully illustrated landscapes in 2D with elements of frame-by-frame animation.\r\n\r\nWe decided that an animation would be the perfect way to communicate how the natural ability of a canine, coupled with a handler, could benefit a company\u2019s security requirements. The aims were twofold: enrich the sales process, whilst also educating the client.",
        "image": "9_2_dogplaying.gif",
        "image-align": "left",
        "order": "0"
    }, {
        "id": "27",
        "portfolio_id": "9",
        "title": "III. Impact",
        "content": "The animation has been extremely effective in securing new clients, as it separates GSS from its competitors and drives brand engagement. By clearly communicating the powerful, cost-effective impact of deploying a canine handler team, the video has built brand trust and loyalty.",
        "image": "9_3_dogwalking.gif",
        "image-align": "right",
        "order": "3"
    }, {
        "id": "28",
        "portfolio_id": "10",
        "title": "I. Challenge",
        "content": "Immigration is a complex and emotive topic. The IAS website is filled with lots of in-depth content outlining the company\u2019s knowledge and professionalism, but they were struggling to communicate the human side of the service they deliver.",
        "image": "10_1_pouringcoffee.gif",
        "image-align": "right",
        "order": "1"
    }, {
        "id": "29",
        "portfolio_id": "10",
        "title": "II. Solution",
        "content": "Our creative sessions with the team unveiled some moving stories about their own employees. Many had previous experiences of immigration, which inspired them to work with IAS. We drew on these to produce three heartfelt videos, personalising the experience of their customers.",
        "image": "10_2_incar.gif",
        "image-align": "left",
        "order": "2"
    }, {
        "id": "30",
        "portfolio_id": "10",
        "title": "III. Impact",
        "content": "As planned, the videos have been used on strategic landing pages to guide customers to the exact information they are seeking.\r\n\r\nHowever, the long-term impact was much wider: the art direction of production allowed IAS to revamp their branding, and find a tone of voice they could embrace.",
        "image": "10_3_stairs.gif",
        "image-align": "right",
        "order": "3"
    }, {
        "id": "31",
        "portfolio_id": "11",
        "title": "I. Challenge",
        "content": "Having grown exponentially in a relatively short timeframe, GunnerCooke recognised a need to re-establish the brand and demonstrate its evolution.\r\n\r\nWe agreed that live action would be the most relevant style for this new video; the challenge was to produce something that looked like nothing else a firm had made before\u2026",
        "image": "",
        "image-align": "right",
        "order": "1"
    }, {
        "id": "32",
        "portfolio_id": "12",
        "title": "I. Challenge",
        "content": "As the world\u2019s leading manufacturers of metal detectors for food producers, Mettler Toledo Safeline are confident in the quality and added value of their products. However, they recognised a need to stay competitive and target new customers, and saw that there was room to improve their marketing communications.",
        "image": "12_1_lupa.gif",
        "image-align": "right",
        "order": "1"
    }, {
        "id": "33",
        "portfolio_id": "12",
        "title": "",
        "content": "",
        "image": "12_2_section.png",
        "image-align": "center",
        "order": "2"
    }, {
        "id": "34",
        "portfolio_id": "12",
        "title": "II. Solution",
        "content": "It was immediately clear how MTS excelled in overcoming \u201cproduct effect\u201d challenges. So we decided to produce an animation that educated potential customers on what product effect is, why it\u2019s important and how their metal detectors tackle it.\r\n\r\nWe felt that animated video would be the most effective way to break down these benefits for someone with little technical knowledge, and set about creating a simple and engaging animation that anyone would be able to understand.",
        "image": "12_3_food.gif",
        "image-align": "right",
        "order": "3"
    }, {
        "id": "35",
        "portfolio_id": "13",
        "title": "I. Challenge",
        "content": "GroupCam is an app that makes camera sharing easy. Ahead of their first investment round, the team needed to produce an animation that clearly explained the product. However, as a newcomer to the market, they were struggling to find a creative partner that could understand and interpret the app concept.",
        "image": "13_1_frames.png",
        "image-align": "right",
        "order": "1"
    }, {
        "id": "36",
        "portfolio_id": "13",
        "title": "II. Solution",
        "content": "We quickly realised that in order to deliver on GroupCam\u2019s vision, we would need to act as an extension of their team. By working closely alongside the app\u2019s founders, while still retaining our objective point of view, we were able to create a clear, engaging video, with characters that could reinforce the company\u2019s branding.\r\n\r\nIn the early stages of the project, we spent a lot of time trying to figure out the best way to communicate GroupCam\u2019s message.\r\n\r\nAfter writing and rewriting scripts, and drawing and redrawing storyboards, we began to build a clear picture of how the app worked, and what made it so unique.",
        "image": "13_2_frames2.png",
        "image-align": "left",
        "order": "2"
    }, {
        "id": "37",
        "portfolio_id": "13",
        "title": "III. Impact",
        "content": "The animation became a focal part of GroupCam\u2019s investment pitch; they raised \u00a3120,000 in their first round of investment, and have since pursued further funding and secured 50,000 users across Denmark.\r\n\r\nAs well as delivering on the founders\u2019 core objectives, the video has also gained exposure through a feature on Danish TV. Meanwhile, one of the characters designed for the animation is now used across their social media.",
        "image": "13_3_hipster.gif",
        "image-align": "right",
        "order": "3"
    }, {
        "id": "38",
        "portfolio_id": "14",
        "title": "I. Challenge",
        "content": "Most people recycle, but they don\u2019t always know the best way. As the UK\u2019s leading aluminium packaging producers and reprocessors, ALUPRO wanted to educate consumers on the importance of leaving the metal cap on the bottle when you recycle. To spread the word and generate support, they needed a great communication tool.",
        "image": "14_1_trash.gif",
        "image-align": "right",
        "order": "1"
    }, {
        "id": "39",
        "portfolio_id": "13",
        "title": "II. Solution",
        "content": "Animation was a natural choice: it would give ALUPRO a simple and engaging alternative to Powerpoint slides when pitching to companies and organisations.\r\n\r\nWe collaborated with Studio North to form a story that told the tale of a lost bottle top. The idea was to follow the lonely little bottle top through the recycling process, to outline the problem and engage the audience in a powerful way.",
        "image": "14_2_bottle.gif",
        "image-align": "left",
        "order": "2"
    }, {
        "id": "40",
        "portfolio_id": "14",
        "title": "III. Impact",
        "content": "Since the campaign was launched, ALUPRO have enjoyed remarkable success in generating support for their campaign. Already, 800 organisations have signed up to the scheme, while over 5000 new collection points have been set up across the UK.\r\n\r\n",
        "image": "14_3_recycle.gif",
        "image-align": "right",
        "order": "3"
    }, {
        "id": "41",
        "portfolio_id": "15",
        "title": "I. Challenge",
        "content": "GunnerCooke take a transparent, modern approach to law, working on a fixed fee basis rather than the timesheets used by firms for centuries. It\u2019s a small but crucial difference, symbolic of the vision they wanted to share with potential new partners.",
        "image": "15_1_clock.gif",
        "image-align": "right",
        "order": "1"
    }, {
        "id": "42",
        "portfolio_id": "15",
        "title": "II. Solution",
        "content": "We explored visual ways to demonstrate the stark difference between the old legacy of law, and the pioneering approach led by GunnerCooke. To capture this concept, we produced an animation that told a story of the move away from medieval practices towards a brave new world.\r\n\r\nAnimations, supported by voiceover, offered a creative way to present the values and heritage of GunnerCooke. By weaving a narrative, we aimed to set the firm apart from its competitors and engage top talent.",
        "image": "15_2_ideas.gif",
        "image-align": "left",
        "order": "2"
    }, {
        "id": "43",
        "portfolio_id": "15",
        "title": "III. Impact",
        "content": "Over the last three years, GunnerCooke have grown from 20 partners to over 120. The animation has been integral to the organisation\u2019s recruitment efforts, and continues to play a key role in their communications.",
        "image": "15_3_logo.gif",
        "image-align": "right",
        "order": "3"
    }]
    


}

export default constants;