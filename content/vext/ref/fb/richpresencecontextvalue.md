---
title: RichPresenceContextValue
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[RichPresenceContextValue](#constructor-0)**() |
| **[RichPresenceContextValue](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[RichPresenceContextValue](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "sid" >}} | string |
| {{< prop "index" >}} | int |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "RichPresenceContextValue" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### RichPresenceContextValue {#constructor-0}
> **RichPresenceContextValue**()

Creates a new [RichPresenceContextValue](/vext/ref/fb/richpresencecontextvalue) frostbite instance.

### RichPresenceContextValue {#constructor-1}
> **RichPresenceContextValue**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [RichPresenceContextValue](/vext/ref/fb/richpresencecontextvalue) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### RichPresenceContextValue {#constructor-2}
> **RichPresenceContextValue**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RichPresenceContextValue](/vext/ref/fb/richpresencecontextvalue). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [RichPresenceContextValue](/vext/ref/fb/richpresencecontextvalue). |

## Properties
### {{% prop-heading "sid" %}}
> **string**

### {{% prop-heading "index" %}}
> **int**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [RichPresenceContextValue](/vext/ref/fb/richpresencecontextvalue) type.

