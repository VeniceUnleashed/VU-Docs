---
title: ConditionGroup
---

Inherits from 
[AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)

## Summary
### Constructors
| |
| ----------- |
| **[ConditionGroup](#constructor-0)**() |
| **[ConditionGroup](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ConditionGroup](#constructor-2)**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)) |
| **[ConditionGroup](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "x" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "y" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "trueValue" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "condition" >}} | [ConditionType](/vext/ref/fb/conditiontype) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ConditionGroup" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ConditionGroup {#constructor-0}
> **ConditionGroup**()

Creates a new [ConditionGroup](/vext/ref/fb/conditiongroup) frostbite instance.

### ConditionGroup {#constructor-1}
> **ConditionGroup**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ConditionGroup](/vext/ref/fb/conditiongroup) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ConditionGroup {#constructor-2}
> **ConditionGroup**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup))

Casts an instance of type [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) to [ConditionGroup](/vext/ref/fb/conditiongroup). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) | The instance to cast to [ConditionGroup](/vext/ref/fb/conditiongroup). |

### ConditionGroup {#constructor-3}
> **ConditionGroup**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ConditionGroup](/vext/ref/fb/conditiongroup). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ConditionGroup](/vext/ref/fb/conditiongroup). |

## Properties
### {{% prop-heading "x" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "y" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "trueValue" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "condition" %}}
> **[ConditionType](/vext/ref/fb/conditiontype)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ConditionGroup](/vext/ref/fb/conditiongroup) type.

