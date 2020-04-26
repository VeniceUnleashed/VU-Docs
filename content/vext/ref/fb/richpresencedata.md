---
title: RichPresenceData
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[RichPresenceData](#constructor-0)**() |
| **[RichPresenceData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[RichPresenceData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[RichPresenceData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "presenceModes" >}} | [RichPresencePresenceString](/vext/ref/fb/richpresencepresencestring)[] |
| {{< prop "defaultMode" >}} | [RichPresencePresenceString](/vext/ref/fb/richpresencepresencestring) \| nil |
| {{< prop "inactiveMode" >}} | [RichPresencePresenceString](/vext/ref/fb/richpresencepresencestring) \| nil |
| {{< prop "contexts" >}} | [RichPresenceContext](/vext/ref/fb/richpresencecontext)[] |
| {{< prop "properties" >}} | [RichPresenceProperty](/vext/ref/fb/richpresenceproperty)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "RichPresenceData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### RichPresenceData {#constructor-0}
> **RichPresenceData**()

Creates a new [RichPresenceData](/vext/ref/fb/richpresencedata) frostbite instance.

### RichPresenceData {#constructor-1}
> **RichPresenceData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [RichPresenceData](/vext/ref/fb/richpresencedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### RichPresenceData {#constructor-2}
> **RichPresenceData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [RichPresenceData](/vext/ref/fb/richpresencedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [RichPresenceData](/vext/ref/fb/richpresencedata). |

### RichPresenceData {#constructor-3}
> **RichPresenceData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RichPresenceData](/vext/ref/fb/richpresencedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [RichPresenceData](/vext/ref/fb/richpresencedata). |

## Properties
### {{% prop-heading "presenceModes" %}}
> **[RichPresencePresenceString](/vext/ref/fb/richpresencepresencestring)**[]

### {{% prop-heading "defaultMode" %}}
> **[RichPresencePresenceString](/vext/ref/fb/richpresencepresencestring)** | **nil**

### {{% prop-heading "inactiveMode" %}}
> **[RichPresencePresenceString](/vext/ref/fb/richpresencepresencestring)** | **nil**

### {{% prop-heading "contexts" %}}
> **[RichPresenceContext](/vext/ref/fb/richpresencecontext)**[]

### {{% prop-heading "properties" %}}
> **[RichPresenceProperty](/vext/ref/fb/richpresenceproperty)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [RichPresenceData](/vext/ref/fb/richpresencedata) type.

