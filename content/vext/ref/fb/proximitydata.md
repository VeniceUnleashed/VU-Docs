---
title: ProximityData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[ProximityData](#constructor-0)**() |
| **[ProximityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ProximityData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "proximityType" >}} | [ProximityObjectType](/vext/ref/fb/proximityobjecttype) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ProximityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ProximityData {#constructor-0}
> **ProximityData**()

Creates a new [ProximityData](/vext/ref/fb/proximitydata) frostbite instance.

### ProximityData {#constructor-1}
> **ProximityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ProximityData](/vext/ref/fb/proximitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ProximityData {#constructor-2}
> **ProximityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ProximityData](/vext/ref/fb/proximitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ProximityData](/vext/ref/fb/proximitydata). |

## Properties
### {{% prop-heading "proximityType" %}}
> **[ProximityObjectType](/vext/ref/fb/proximityobjecttype)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ProximityData](/vext/ref/fb/proximitydata) type.

