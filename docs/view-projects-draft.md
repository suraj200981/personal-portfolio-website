# View Project Interaction – Draft

This draft outlines the behaviour and content structure for the `view project` link that appears on each portfolio card. It is intended as a starting point for both copy and UI implementation.

## Interaction Flow

1. **Trigger** – User clicks `view project` on any project card.
2. **Response** – A full-screen modal (or dedicated detail page) fades in over the portfolio grid.
3. **Focus handling** – Background scroll locks, and focus moves to the modal header for accessibility.
4. **Navigation** – Modal includes a close icon and a secondary `Next project` toggle; pressing `Esc` also closes it.
5. **URL strategy (optional)** – Append `?project=<slug>` to support deep-linking so that refreshing the page reopens the same project.

## Layout Wireframe (Modal)

```
 -----------------------------------------------------------
| Hero image (16:9, dark overlay, project title, year)      |
|-----------------------------------------------------------|
|  Left column (65%)     |  Right column (35%)              |
|-----------------------------------------------------------|
| • Project overview     | • Snapshot metrics               |
| • My role & team       |   - Impact KPI                   |
| • Challenges solved    |   - Delivery timeframe           |
| • Outcome narrative    |   - Tech stack (chips)           |
|-----------------------------------------------------------|
| Case study body (optional tabs: Discovery / Delivery /    |
| Results) with pull quotes and inline imagery              |
|-----------------------------------------------------------|
| Footer actions: GitHub / Live demo / Close modal          |
 -----------------------------------------------------------
```

## Tone & Copy Guidelines

- Lead with the problem/mission in one sentence, then detail the solution.
- Highlight concrete ownership (`Led`, `Partnered`, `Delivered`).
- Quantify impact when possible (latency reduced by X, adoption grew Y%).
- Keep sections skimmable: 2–3 sentence paragraphs, bullet lists for tech stack.

## Content Drafts by Project

### Suessy iOS platform
- **Hero title**: "Suessy iOS Platform"
- **Overview**: Built the first release of Suessy’s concierge-style travel companion app, delivering itinerary sharing and in-destination chat.
- **Role & team**: Led a 4-person pod (React Native, Spring Boot, DevOps, Product) from discovery through production launch.
- **Challenges**: Ship an MVP in 10 weeks while integrating hotel PMS data and payment workflows.
- **Outcomes**: App Store soft launch in Calgary with 200 pilot users; 98% crash-free sessions; onboarding reduced from 15 to 6 minutes.
- **Stack call-outs**: React Native, Redux Toolkit, Java Spring Boot APIs, AWS Fargate, PostgreSQL, Terraform.

### HMRC Digital Customer Services
- **Hero title**: "HMRC Digital Customer Services"
- **Overview**: Orchestrated cross-team delivery of citizen-facing services supporting tax submissions and identity verification for millions of UK residents.
- **Role & team**: Led multiple Netcompany workstreams; collaborated with HMRC product owners, security, and infrastructure teams.
- **Challenges**: Align service design with stringent compliance, ensure performance under peak seasonal loads, and migrate legacy APIs.
- **Outcomes**: Released a re-platformed service layer handling 5M+ monthly interactions with <300ms API latency and improved CSAT scores by 12%.
- **Stack call-outs**: Java microservices, Azure API Management, Azure DevOps pipelines, Splunk observability, React web front ends.

### Cloud cost optimisation
- **Hero title**: "Cloud Cost Optimisation Initiative"
- **Overview**: Drove a cost-efficiency programme across AWS estates covering analytics, customer portals, and CI/CD workloads.
- **Role & team**: Partnered with platform engineering and finance stakeholders; analysed utilisation data and proposed savings roadmap.
- **Challenges**: Maintain reliability while reducing spend, coordinate changes across globally distributed teams.
- **Outcomes**: Achieved 25% OPEX savings by implementing autoscaling policies, reserved instances, and storage tiering.
- **Stack call-outs**: AWS Cost Explorer, CloudWatch, Lambda automation, Terraform, Grafana dashboards.

### Operational enablement
- **Hero title**: "Operational Enablement Playbooks"
- **Overview**: Produced technical onboarding assets and SOPs for new product squads across the organisation.
- **Role & team**: Sole author/editor working with SMEs; facilitated workshops to capture tribal knowledge.
- **Challenges**: Standardise processes while keeping guidance adaptable to varied product lines.
- **Outcomes**: Reduced onboarding ramp-up time by ~40%, improved internal audit readiness scores, and created a living Confluence knowledge base.
- **Stack call-outs**: Confluence, Miro, Loom walkthroughs, Azure DevOps repositories.

### Guest experience operations
- **Hero title**: "Fairmont Guest Experience Operations"
- **Overview**: Supported luxury resort front-of-house teams with concierge, valet, and logistics coordination during peak seasons.
- **Role & team**: Worked cross-functionally with concierge, housekeeping, and event staff to orchestrate guest itineraries.
- **Challenges**: Balance high-touch service expectations with rapid-fire requests and internal communications.
- **Outcomes**: Improved guest satisfaction metrics, streamlined luggage handling workflows, and piloted a digital shift scheduling tool.
- **Stack call-outs**: Opera PMS, Salesforce CRM, Microsoft Teams workflows, onsite logistics tools.

### Retail & customer engagement
- **Hero title**: "Retail & Customer Engagement"
- **Overview**: Delivered frontline support and merchandising across Boots / Walgreens locations while hitting weekly sales KPIs.
- **Role & team**: Collaborated with pharmacists, beauty consultants, and supply teams to optimise product placement and customer journeys.
- **Challenges**: Manage inventory turns, adapt to promotional cycles, and maintain compliance with regulated products.
- **Outcomes**: Top-quartile regional mystery shopper scores, accelerated seasonal campaign setups, trained new associates on POS systems.
- **Stack call-outs**: Oracle Retail, POS terminals, inventory analytics dashboards.

## Implementation Notes

- Extend `dataportfolio` entries with a `slug`, `title`, `role`, `challenges`, `outcomes`, and `stack` array to drive the modal content.
- Use `react-bootstrap`’s `<Modal>` for structure, or create a custom layout to retain branding.
- Consider lazy-loading high-resolution imagery to keep initial page weight light.
- Add basic analytics (e.g., custom event `portfolio_view_detail`) to measure engagement.

