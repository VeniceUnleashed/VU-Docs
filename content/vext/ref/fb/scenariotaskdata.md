---
title: ScenarioTaskData
---


## Summary
### Constructors
| |
| ----------- |
| **[ScenarioTaskData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "endPointWorldOffset" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "startPoint" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "scenarioId" >}} | int |
| {{< prop "actorId" >}} | int |
| {{< prop "partId" >}} | int |
| {{< prop "levelId" >}} | int |
| {{< prop "worldAngle" >}} | float |
| {{< prop "connectTransforms" >}} | [LinearTransform](/vext/ref/shared/class/lineartransform)[] |
| {{< prop "startTurnDistance" >}} | float |
| {{< prop "startTimerDistance" >}} | float |
| {{< prop "triggerScenarioDelay" >}} | float |
| {{< prop "triggerScenario" >}} | bool |
| {{< prop "useClientPosition" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [ScenarioTaskData](/vext/ref/fb/scenariotaskdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ScenarioTaskData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ScenarioTaskData {#constructor-0}
> **ScenarioTaskData**()

Creates a new [ScenarioTaskData](/vext/ref/fb/scenariotaskdata) frostbite structure.

## Properties
### {{% prop-heading "endPointWorldOffset" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "startPoint" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

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
> **[LinearTransform](/vext/ref/shared/class/lineartransform)**[]

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
### Clone
> **Clone**(): [ScenarioTaskData](/vext/ref/fb/scenariotaskdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[ScenarioTaskData](/vext/ref/fb/scenariotaskdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ScenarioTaskData](/vext/ref/fb/scenariotaskdata) type.

