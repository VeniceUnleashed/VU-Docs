---
title: MatchmakingSizeConfiguration
---


## Summary
### Constructors
| |
| ----------- |
| **[MatchmakingSizeConfiguration](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "platform" >}} | [MatchmakingPlatform](/vext/ref/fb/matchmakingplatform) |
| {{< prop "settings" >}} | string[] |
| {{< prop "desiredPlayerCount" >}} | int |
| {{< prop "minPlayerCount" >}} | int |
| {{< prop "maxPlayerCapacity" >}} | int |
| {{< prop "minFitThreshold" >}} | string |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [MatchmakingSizeConfiguration](/vext/ref/fb/matchmakingsizeconfiguration) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MatchmakingSizeConfiguration" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MatchmakingSizeConfiguration {#constructor-0}
> **MatchmakingSizeConfiguration**()

Creates a new [MatchmakingSizeConfiguration](/vext/ref/fb/matchmakingsizeconfiguration) frostbite structure.

## Properties
### {{% prop-heading "platform" %}}
> **[MatchmakingPlatform](/vext/ref/fb/matchmakingplatform)**

### {{% prop-heading "settings" %}}
> **string**[]

### {{% prop-heading "desiredPlayerCount" %}}
> **int**

### {{% prop-heading "minPlayerCount" %}}
> **int**

### {{% prop-heading "maxPlayerCapacity" %}}
> **int**

### {{% prop-heading "minFitThreshold" %}}
> **string**

## Methods
### Clone
> **Clone**(): [MatchmakingSizeConfiguration](/vext/ref/fb/matchmakingsizeconfiguration)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[MatchmakingSizeConfiguration](/vext/ref/fb/matchmakingsizeconfiguration)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MatchmakingSizeConfiguration](/vext/ref/fb/matchmakingsizeconfiguration) type.

