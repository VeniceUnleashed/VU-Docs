---
title: TicketCountPercentage
---


## Summary
### Constructors
| |
| ----------- |
| **[TicketCountPercentage](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "maxPercentOfTicketsLeft" >}} | int |
| {{< prop "ticketLossPerMin" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [TicketCountPercentage](/vext/ref/fb/ticketcountpercentage) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "TicketCountPercentage" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### TicketCountPercentage {#constructor-0}
> **TicketCountPercentage**()

Creates a new [TicketCountPercentage](/vext/ref/fb/ticketcountpercentage) frostbite structure.

## Properties
### {{% prop-heading "maxPercentOfTicketsLeft" %}}
> **int**

### {{% prop-heading "ticketLossPerMin" %}}
> **int**

## Methods
### Clone
> **Clone**(): [TicketCountPercentage](/vext/ref/fb/ticketcountpercentage)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[TicketCountPercentage](/vext/ref/fb/ticketcountpercentage)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [TicketCountPercentage](/vext/ref/fb/ticketcountpercentage) type.

