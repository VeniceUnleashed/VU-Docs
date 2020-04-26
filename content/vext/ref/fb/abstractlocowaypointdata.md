---
title: AbstractLocoWaypointData
---

Inherits from [WaypointData](/vext/ref/fb/waypointdata)

## Summary

### Constructors

|  |
| --- |
| **[AbstractLocoWaypointData](#constructor-0)**() |
| **[AbstractLocoWaypointData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AbstractLocoWaypointData](#constructor-2)**(other: [WaypointData](/vext/ref/fb/waypointdata)) |
| **[AbstractLocoWaypointData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "baseTask" >}} | [AILocoBaseTaskData](/vext/ref/fb/ailocobasetaskdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AbstractLocoWaypointData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AbstractLocoWaypointData {#constructor-0}

> **AbstractLocoWaypointData**()

Creates a new [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata) frostbite instance.

### AbstractLocoWaypointData {#constructor-1}

> **AbstractLocoWaypointData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AbstractLocoWaypointData {#constructor-2}

> **AbstractLocoWaypointData**(other: [WaypointData](/vext/ref/fb/waypointdata))

Casts an instance of type [WaypointData](/vext/ref/fb/waypointdata) to [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [WaypointData](/vext/ref/fb/waypointdata) | The instance to cast to [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata). |

### AbstractLocoWaypointData {#constructor-3}

> **AbstractLocoWaypointData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata). |

## Properties

### {{% prop-heading "baseTask" %}}

> **[AILocoBaseTaskData](/vext/ref/fb/ailocobasetaskdata)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata) type.

