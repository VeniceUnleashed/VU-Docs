---
title: ScenarioTaskData
---

## Summary

### Constructors

|  |
| --- |
| **[ScenarioTaskData](#constructor-0)**() |
| **[ScenarioTaskData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "endPointWorldOffset" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "startPoint" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "scenarioId" >}} | int |
| {{< prop "actorId" >}} | int |
| {{< prop "partId" >}} | int |
| {{< prop "levelId" >}} | int |
| {{< prop "worldAngle" >}} | float |
| {{< prop "connectTransforms" >}} | [LinearTransform](/vext/ref/shared/type/lineartransform)[] |
| {{< prop "startTurnDistance" >}} | float |
| {{< prop "startTimerDistance" >}} | float |
| {{< prop "triggerScenarioDelay" >}} | float |
| {{< prop "triggerScenario" >}} | bool |
| {{< prop "useClientPosition" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [ScenarioTaskData](/vext/ref/fb/scenariotaskdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ScenarioTaskData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ScenarioTaskData {#constructor-0}

> **ScenarioTaskData**()

Creates a new [ScenarioTaskData](/vext/ref/fb/scenariotaskdata) frostbite instance.

### ScenarioTaskData {#constructor-1}

> **ScenarioTaskData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ScenarioTaskData](/vext/ref/fb/scenariotaskdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "endPointWorldOffset" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "startPoint" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "scenarioId" %}}

> **int**

### {{% prop-heading "actorId" %}}

> **int**

### {{% prop-heading "partId" %}}

> **int**

### {{% prop-heading "levelId" %}}

> **int**

### {{% prop-heading "worldAngle" %}}

> **float**

### {{% prop-heading "connectTransforms" %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**[]

### {{% prop-heading "startTurnDistance" %}}

> **float**

### {{% prop-heading "startTimerDistance" %}}

> **float**

### {{% prop-heading "triggerScenarioDelay" %}}

> **float**

### {{% prop-heading "triggerScenario" %}}

> **bool**

### {{% prop-heading "useClientPosition" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [ScenarioTaskData](/vext/ref/fb/scenariotaskdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ScenarioTaskData](/vext/ref/fb/scenariotaskdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ScenarioTaskData](/vext/ref/fb/scenariotaskdata) type.

