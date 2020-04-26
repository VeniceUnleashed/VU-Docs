---
title: BotPriorityConfigData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[BotPriorityConfigData](#constructor-0)**() |
| **[BotPriorityConfigData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[BotPriorityConfigData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "debugColor" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "distance" >}} | float |
| {{< prop "period" >}} | int |
| {{< prop "angleOffset" >}} | float |
| {{< prop "appliesToExecution" >}} | bool |
| {{< prop "appliesToDecisions" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "BotPriorityConfigData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### BotPriorityConfigData {#constructor-0}
> **BotPriorityConfigData**()

Creates a new [BotPriorityConfigData](/vext/ref/fb/botpriorityconfigdata) frostbite instance.

### BotPriorityConfigData {#constructor-1}
> **BotPriorityConfigData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [BotPriorityConfigData](/vext/ref/fb/botpriorityconfigdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### BotPriorityConfigData {#constructor-2}
> **BotPriorityConfigData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BotPriorityConfigData](/vext/ref/fb/botpriorityconfigdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [BotPriorityConfigData](/vext/ref/fb/botpriorityconfigdata). |

## Properties
### {{% prop-heading "debugColor" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "distance" %}}
> **float**

### {{% prop-heading "period" %}}
> **int**

### {{% prop-heading "angleOffset" %}}
> **float**

### {{% prop-heading "appliesToExecution" %}}
> **bool**

### {{% prop-heading "appliesToDecisions" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [BotPriorityConfigData](/vext/ref/fb/botpriorityconfigdata) type.

