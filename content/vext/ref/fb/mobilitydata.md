---
title: MobilityData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[MobilityData](#constructor-0)**() |
| **[MobilityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MobilityData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "maxSpeed" >}} | float |
| {{< prop "use3DWaypoints" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MobilityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MobilityData {#constructor-0}
> **MobilityData**()

Creates a new [MobilityData](/vext/ref/fb/mobilitydata) frostbite instance.

### MobilityData {#constructor-1}
> **MobilityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MobilityData](/vext/ref/fb/mobilitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MobilityData {#constructor-2}
> **MobilityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MobilityData](/vext/ref/fb/mobilitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MobilityData](/vext/ref/fb/mobilitydata). |

## Properties
### {{% prop-heading "maxSpeed" %}}
> **float**

### {{% prop-heading "use3DWaypoints" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MobilityData](/vext/ref/fb/mobilitydata) type.

