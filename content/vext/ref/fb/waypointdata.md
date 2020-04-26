---
title: WaypointData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[WaypointData](#constructor-0)**() |
| **[WaypointData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[WaypointData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "schematicsNameHash" >}} | int |
| {{< prop "waypointId" >}} | int |
| {{< prop "useClientsPosition" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "WaypointData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### WaypointData {#constructor-0}

> **WaypointData**()

Creates a new [WaypointData](/vext/ref/fb/waypointdata) frostbite instance.

### WaypointData {#constructor-1}

> **WaypointData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [WaypointData](/vext/ref/fb/waypointdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### WaypointData {#constructor-2}

> **WaypointData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [WaypointData](/vext/ref/fb/waypointdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [WaypointData](/vext/ref/fb/waypointdata). |

## Properties

### {{% prop-heading "schematicsNameHash" %}}

> **int**

### {{% prop-heading "waypointId" %}}

> **int**

### {{% prop-heading "useClientsPosition" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [WaypointData](/vext/ref/fb/waypointdata) type.

