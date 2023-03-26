+++
title = "Example"
weight = 9
+++

{{< mermaid >}}
graph TB;
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{<strong>Decision</strong>}
    C -->|One| D[Result one]
    C -->|Two| E((j kkljlkjlkjlk))
    
    click E "{{< relref "/content/CloudLogic/Authentication Issues/_index.md" >}}"
    click B "{{< relref "/content/CloudLogic/Authentication Issues/_index.md" >}}"
{{< /mermaid >}}
