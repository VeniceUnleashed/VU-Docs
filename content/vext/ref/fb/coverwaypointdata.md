---
title: CoverWaypointData
---

Inherits from [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata)

## Summary

### Constructors

|  |
| --- |
| **[CoverWaypointData](#constructor-0)**() |
| **[CoverWaypointData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[CoverWaypointData](#constructor-2)**(other: [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata)) |
| **[CoverWaypointData](#constructor-3)**(other: [WaypointData](/vext/ref/fb/waypointdata)) |
| **[CoverWaypointData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "coverTask" >}} | [AILocoCoverTaskData](/vext/ref/fb/ailococovertaskdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CoverWaypointData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CoverWaypointData {#constructor-0}

> **CoverWaypointData**()

Creates a new [CoverWaypointData](/vext/ref/fb/coverwaypointdata) frostbite instance.

### CoverWaypointData {#constructor-1}

> **CoverWaypointData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CoverWaypointData](/vext/ref/fb/coverwaypointdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### CoverWaypointData {#constructor-2}

> **CoverWaypointData**(other: [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata))

Casts an instance of type [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata) to [CoverWaypointData](/vext/ref/fb/coverwaypointdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata) | The instance to cast to [CoverWaypointData](/vext/ref/fb/coverwaypointdata). |

### CoverWaypointData {#constructor-3}

> **CoverWaypointData**(other: [WaypointData](/vext/ref/fb/waypointdata))

Casts an instance of type [WaypointData](/vext/ref/fb/waypointdata) to [CoverWaypointData](/vext/ref/fb/coverwaypointdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [WaypointData](/vext/ref/fb/waypointdata) | The instance to cast to [CoverWaypointData](/vext/ref/fb/coverwaypointdata). |

### CoverWaypointData {#constructor-4}

> **CoverWaypointData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [CoverWaypointData](/vext/ref/fb/coverwaypointdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [CoverWaypointData](/vext/ref/fb/coverwaypointdata). |

## Properties

### {{% prop-heading "coverTask" %}}

> **[AILocoCoverTaskData](/vext/ref/fb/ailococovertaskdata)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CoverWaypointData](/vext/ref/fb/coverwaypointdata) type.

