---
title: EventDebugNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[EventDebugNodeData](#constructor-0)**() |
| **[EventDebugNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[EventDebugNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[EventDebugNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "events" >}} | [DebugEventInput](/vext/ref/fb/debugeventinput)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EventDebugNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EventDebugNodeData {#constructor-0}
> **EventDebugNodeData**()

Creates a new [EventDebugNodeData](/vext/ref/fb/eventdebugnodedata) frostbite instance.

### EventDebugNodeData {#constructor-1}
> **EventDebugNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [EventDebugNodeData](/vext/ref/fb/eventdebugnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### EventDebugNodeData {#constructor-2}
> **EventDebugNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [EventDebugNodeData](/vext/ref/fb/eventdebugnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [EventDebugNodeData](/vext/ref/fb/eventdebugnodedata). |

### EventDebugNodeData {#constructor-3}
> **EventDebugNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EventDebugNodeData](/vext/ref/fb/eventdebugnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [EventDebugNodeData](/vext/ref/fb/eventdebugnodedata). |

## Properties
### {{% prop-heading "events" %}}
> **[DebugEventInput](/vext/ref/fb/debugeventinput)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EventDebugNodeData](/vext/ref/fb/eventdebugnodedata) type.

