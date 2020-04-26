---
title: ScenarioWaypointData
---

Inherits from [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata)

## Summary

### Constructors

|  |
| --- |
| **[ScenarioWaypointData](#constructor-0)**() |
| **[ScenarioWaypointData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ScenarioWaypointData](#constructor-2)**(other: [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata)) |
| **[ScenarioWaypointData](#constructor-3)**(other: [WaypointData](/vext/ref/fb/waypointdata)) |
| **[ScenarioWaypointData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "scenarioAntRef" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "scenarioTask" >}} | [ScenarioTaskData](/vext/ref/fb/scenariotaskdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ScenarioWaypointData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ScenarioWaypointData {#constructor-0}

> **ScenarioWaypointData**()

Creates a new [ScenarioWaypointData](/vext/ref/fb/scenariowaypointdata) frostbite instance.

### ScenarioWaypointData {#constructor-1}

> **ScenarioWaypointData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ScenarioWaypointData](/vext/ref/fb/scenariowaypointdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ScenarioWaypointData {#constructor-2}

> **ScenarioWaypointData**(other: [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata))

Casts an instance of type [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata) to [ScenarioWaypointData](/vext/ref/fb/scenariowaypointdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata) | The instance to cast to [ScenarioWaypointData](/vext/ref/fb/scenariowaypointdata). |

### ScenarioWaypointData {#constructor-3}

> **ScenarioWaypointData**(other: [WaypointData](/vext/ref/fb/waypointdata))

Casts an instance of type [WaypointData](/vext/ref/fb/waypointdata) to [ScenarioWaypointData](/vext/ref/fb/scenariowaypointdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [WaypointData](/vext/ref/fb/waypointdata) | The instance to cast to [ScenarioWaypointData](/vext/ref/fb/scenariowaypointdata). |

### ScenarioWaypointData {#constructor-4}

> **ScenarioWaypointData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ScenarioWaypointData](/vext/ref/fb/scenariowaypointdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ScenarioWaypointData](/vext/ref/fb/scenariowaypointdata). |

## Properties

### {{% prop-heading "scenarioAntRef" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "scenarioTask" %}}

> **[ScenarioTaskData](/vext/ref/fb/scenariotaskdata)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ScenarioWaypointData](/vext/ref/fb/scenariowaypointdata) type.

