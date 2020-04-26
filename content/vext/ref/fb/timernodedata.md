---
title: TimerNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[TimerNodeData](#constructor-0)**() |
| **[TimerNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[TimerNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[TimerNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "start" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "stop" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "period" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "tick" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "progress" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "mode" >}} | [TimerMode](/vext/ref/fb/timermode) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "TimerNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### TimerNodeData {#constructor-0}
> **TimerNodeData**()

Creates a new [TimerNodeData](/vext/ref/fb/timernodedata) frostbite instance.

### TimerNodeData {#constructor-1}
> **TimerNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [TimerNodeData](/vext/ref/fb/timernodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### TimerNodeData {#constructor-2}
> **TimerNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [TimerNodeData](/vext/ref/fb/timernodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [TimerNodeData](/vext/ref/fb/timernodedata). |

### TimerNodeData {#constructor-3}
> **TimerNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TimerNodeData](/vext/ref/fb/timernodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [TimerNodeData](/vext/ref/fb/timernodedata). |

## Properties
### {{% prop-heading "start" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "stop" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "period" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "tick" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "progress" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "mode" %}}
> **[TimerMode](/vext/ref/fb/timermode)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [TimerNodeData](/vext/ref/fb/timernodedata) type.

