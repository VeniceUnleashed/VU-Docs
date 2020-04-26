---
title: TicketCountPercentage
---

## Summary

### Constructors

|  |
| --- |
| **[TicketCountPercentage](#constructor-0)**() |
| **[TicketCountPercentage](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "maxPercentOfTicketsLeft" >}} | int |
| {{< prop "ticketLossPerMin" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [TicketCountPercentage](/vext/ref/fb/ticketcountpercentage) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "TicketCountPercentage" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### TicketCountPercentage {#constructor-0}

> **TicketCountPercentage**()

Creates a new [TicketCountPercentage](/vext/ref/fb/ticketcountpercentage) frostbite instance.

### TicketCountPercentage {#constructor-1}

> **TicketCountPercentage**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [TicketCountPercentage](/vext/ref/fb/ticketcountpercentage) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "maxPercentOfTicketsLeft" %}}

> **int**

### {{% prop-heading "ticketLossPerMin" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [TicketCountPercentage](/vext/ref/fb/ticketcountpercentage)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[TicketCountPercentage](/vext/ref/fb/ticketcountpercentage)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [TicketCountPercentage](/vext/ref/fb/ticketcountpercentage) type.

