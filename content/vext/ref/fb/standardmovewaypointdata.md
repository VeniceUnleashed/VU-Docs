---
title: StandardMoveWaypointData
---

Inherits from [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata)

## Summary

### Constructors

|  |
| --- |
| **[StandardMoveWaypointData](#constructor-0)**() |
| **[StandardMoveWaypointData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[StandardMoveWaypointData](#constructor-2)**(other: [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata)) |
| **[StandardMoveWaypointData](#constructor-3)**(other: [WaypointData](/vext/ref/fb/waypointdata)) |
| **[StandardMoveWaypointData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "moveTask" >}} | [AILocoMoveTaskData](/vext/ref/fb/ailocomovetaskdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "StandardMoveWaypointData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### StandardMoveWaypointData {#constructor-0}

> **StandardMoveWaypointData**()

Creates a new [StandardMoveWaypointData](/vext/ref/fb/standardmovewaypointdata) frostbite instance.

### StandardMoveWaypointData {#constructor-1}

> **StandardMoveWaypointData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [StandardMoveWaypointData](/vext/ref/fb/standardmovewaypointdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### StandardMoveWaypointData {#constructor-2}

> **StandardMoveWaypointData**(other: [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata))

Casts an instance of type [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata) to [StandardMoveWaypointData](/vext/ref/fb/standardmovewaypointdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata) | The instance to cast to [StandardMoveWaypointData](/vext/ref/fb/standardmovewaypointdata). |

### StandardMoveWaypointData {#constructor-3}

> **StandardMoveWaypointData**(other: [WaypointData](/vext/ref/fb/waypointdata))

Casts an instance of type [WaypointData](/vext/ref/fb/waypointdata) to [StandardMoveWaypointData](/vext/ref/fb/standardmovewaypointdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [WaypointData](/vext/ref/fb/waypointdata) | The instance to cast to [StandardMoveWaypointData](/vext/ref/fb/standardmovewaypointdata). |

### StandardMoveWaypointData {#constructor-4}

> **StandardMoveWaypointData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [StandardMoveWaypointData](/vext/ref/fb/standardmovewaypointdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [StandardMoveWaypointData](/vext/ref/fb/standardmovewaypointdata). |

## Properties

### {{% prop-heading "moveTask" %}}

> **[AILocoMoveTaskData](/vext/ref/fb/ailocomovetaskdata)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [StandardMoveWaypointData](/vext/ref/fb/standardmovewaypointdata) type.

