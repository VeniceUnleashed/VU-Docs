---
title: EventSwitcherNodeData
---

Inherits from [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary

### Constructors

|  |
| --- |
| **[EventSwitcherNodeData](#constructor-0)**() |
| **[EventSwitcherNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[EventSwitcherNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[EventSwitcherNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "inputs" >}} | [EventSwitcherEntry](/vext/ref/fb/eventswitcherentry)[] |
| {{< prop "value" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EventSwitcherNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EventSwitcherNodeData {#constructor-0}

> **EventSwitcherNodeData**()

Creates a new [EventSwitcherNodeData](/vext/ref/fb/eventswitchernodedata) frostbite instance.

### EventSwitcherNodeData {#constructor-1}

> **EventSwitcherNodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EventSwitcherNodeData](/vext/ref/fb/eventswitchernodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### EventSwitcherNodeData {#constructor-2}

> **EventSwitcherNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [EventSwitcherNodeData](/vext/ref/fb/eventswitchernodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [EventSwitcherNodeData](/vext/ref/fb/eventswitchernodedata). |

### EventSwitcherNodeData {#constructor-3}

> **EventSwitcherNodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [EventSwitcherNodeData](/vext/ref/fb/eventswitchernodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [EventSwitcherNodeData](/vext/ref/fb/eventswitchernodedata). |

## Properties

### {{% prop-heading "inputs" %}}

> **[EventSwitcherEntry](/vext/ref/fb/eventswitcherentry)**[]

### {{% prop-heading "value" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EventSwitcherNodeData](/vext/ref/fb/eventswitchernodedata) type.

