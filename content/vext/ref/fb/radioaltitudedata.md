---
title: RadioAltitudeData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[RadioAltitudeData](#constructor-0)**() |
| **[RadioAltitudeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[RadioAltitudeData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "range" >}} | float |
| {{< prop "updateFrequency" >}} | float |
| {{< prop "collisionMethod" >}} | [CollisionMethodEnum](/vext/ref/fb/collisionmethodenum) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "RadioAltitudeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### RadioAltitudeData {#constructor-0}
> **RadioAltitudeData**()

Creates a new [RadioAltitudeData](/vext/ref/fb/radioaltitudedata) frostbite instance.

### RadioAltitudeData {#constructor-1}
> **RadioAltitudeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [RadioAltitudeData](/vext/ref/fb/radioaltitudedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### RadioAltitudeData {#constructor-2}
> **RadioAltitudeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RadioAltitudeData](/vext/ref/fb/radioaltitudedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [RadioAltitudeData](/vext/ref/fb/radioaltitudedata). |

## Properties
### {{% prop-heading "range" %}}
> **float**

### {{% prop-heading "updateFrequency" %}}
> **float**

### {{% prop-heading "collisionMethod" %}}
> **[CollisionMethodEnum](/vext/ref/fb/collisionmethodenum)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [RadioAltitudeData](/vext/ref/fb/radioaltitudedata) type.

