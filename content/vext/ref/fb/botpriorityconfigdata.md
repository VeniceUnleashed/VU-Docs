---
title: BotPriorityConfigData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[BotPriorityConfigData](#constructor-0)**() |
| **[BotPriorityConfigData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[BotPriorityConfigData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "debugColor" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "distance" >}} | float |
| {{< prop "period" >}} | int |
| {{< prop "angleOffset" >}} | float |
| {{< prop "appliesToExecution" >}} | bool |
| {{< prop "appliesToDecisions" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "BotPriorityConfigData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### BotPriorityConfigData {#constructor-0}

> **BotPriorityConfigData**()

Creates a new [BotPriorityConfigData](/vext/ref/fb/botpriorityconfigdata) frostbite instance.

### BotPriorityConfigData {#constructor-1}

> **BotPriorityConfigData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [BotPriorityConfigData](/vext/ref/fb/botpriorityconfigdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### BotPriorityConfigData {#constructor-2}

> **BotPriorityConfigData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [BotPriorityConfigData](/vext/ref/fb/botpriorityconfigdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [BotPriorityConfigData](/vext/ref/fb/botpriorityconfigdata). |

## Properties

### {{% prop-heading "debugColor" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

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

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [BotPriorityConfigData](/vext/ref/fb/botpriorityconfigdata) type.

