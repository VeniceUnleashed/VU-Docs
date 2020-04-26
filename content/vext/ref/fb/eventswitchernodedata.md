---
title: EventSwitcherNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[EventSwitcherNodeData](#constructor-0)**() |
| **[EventSwitcherNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[EventSwitcherNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[EventSwitcherNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "inputs" >}} | [EventSwitcherEntry](/vext/ref/fb/eventswitcherentry)[] |
| {{< prop "value" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EventSwitcherNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EventSwitcherNodeData {#constructor-0}
> **EventSwitcherNodeData**()

Creates a new [EventSwitcherNodeData](/vext/ref/fb/eventswitchernodedata) frostbite instance.

### EventSwitcherNodeData {#constructor-1}
> **EventSwitcherNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [EventSwitcherNodeData](/vext/ref/fb/eventswitchernodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### EventSwitcherNodeData {#constructor-2}
> **EventSwitcherNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [EventSwitcherNodeData](/vext/ref/fb/eventswitchernodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [EventSwitcherNodeData](/vext/ref/fb/eventswitchernodedata). |

### EventSwitcherNodeData {#constructor-3}
> **EventSwitcherNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EventSwitcherNodeData](/vext/ref/fb/eventswitchernodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [EventSwitcherNodeData](/vext/ref/fb/eventswitchernodedata). |

## Properties
### {{% prop-heading "inputs" %}}
> **[EventSwitcherEntry](/vext/ref/fb/eventswitcherentry)**[]

### {{% prop-heading "value" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EventSwitcherNodeData](/vext/ref/fb/eventswitchernodedata) type.

