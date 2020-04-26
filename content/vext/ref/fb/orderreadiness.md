---
title: OrderReadiness
---

Inherits from 
[UrgencyUserData](/vext/ref/fb/urgencyuserdata)

## Summary
### Constructors
| |
| ----------- |
| **[OrderReadiness](#constructor-0)**() |
| **[OrderReadiness](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[OrderReadiness](#constructor-2)**(other: [UrgencyUserData](/vext/ref/fb/urgencyuserdata)) |
| **[OrderReadiness](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "orderType" >}} | string |
| {{< prop "minimumReadiness" >}} | [ReadinessState](/vext/ref/fb/readinessstate) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "OrderReadiness" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### OrderReadiness {#constructor-0}
> **OrderReadiness**()

Creates a new [OrderReadiness](/vext/ref/fb/orderreadiness) frostbite instance.

### OrderReadiness {#constructor-1}
> **OrderReadiness**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [OrderReadiness](/vext/ref/fb/orderreadiness) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### OrderReadiness {#constructor-2}
> **OrderReadiness**(other: [UrgencyUserData](/vext/ref/fb/urgencyuserdata))

Casts an instance of type [UrgencyUserData](/vext/ref/fb/urgencyuserdata) to [OrderReadiness](/vext/ref/fb/orderreadiness). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UrgencyUserData](/vext/ref/fb/urgencyuserdata) | The instance to cast to [OrderReadiness](/vext/ref/fb/orderreadiness). |

### OrderReadiness {#constructor-3}
> **OrderReadiness**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [OrderReadiness](/vext/ref/fb/orderreadiness). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [OrderReadiness](/vext/ref/fb/orderreadiness). |

## Properties
### {{% prop-heading "orderType" %}}
> **string**

### {{% prop-heading "minimumReadiness" %}}
> **[ReadinessState](/vext/ref/fb/readinessstate)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [OrderReadiness](/vext/ref/fb/orderreadiness) type.

