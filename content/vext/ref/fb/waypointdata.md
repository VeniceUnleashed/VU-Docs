---
title: WaypointData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[WaypointData](#constructor-0)**() |
| **[WaypointData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[WaypointData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "schematicsNameHash" >}} | int |
| {{< prop "waypointId" >}} | int |
| {{< prop "useClientsPosition" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "WaypointData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### WaypointData {#constructor-0}
> **WaypointData**()

Creates a new [WaypointData](/vext/ref/fb/waypointdata) frostbite instance.

### WaypointData {#constructor-1}
> **WaypointData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [WaypointData](/vext/ref/fb/waypointdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### WaypointData {#constructor-2}
> **WaypointData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WaypointData](/vext/ref/fb/waypointdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [WaypointData](/vext/ref/fb/waypointdata). |

## Properties
### {{% prop-heading "schematicsNameHash" %}}
> **int**

### {{% prop-heading "waypointId" %}}
> **int**

### {{% prop-heading "useClientsPosition" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [WaypointData](/vext/ref/fb/waypointdata) type.

