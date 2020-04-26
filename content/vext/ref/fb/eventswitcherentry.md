---
title: EventSwitcherEntry
---

Inherits from [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)

## Summary

### Constructors

|  |
| --- |
| **[EventSwitcherEntry](#constructor-0)**() |
| **[EventSwitcherEntry](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[EventSwitcherEntry](#constructor-2)**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)) |
| **[EventSwitcherEntry](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "caseTrigger" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "value" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EventSwitcherEntry" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EventSwitcherEntry {#constructor-0}

> **EventSwitcherEntry**()

Creates a new [EventSwitcherEntry](/vext/ref/fb/eventswitcherentry) frostbite instance.

### EventSwitcherEntry {#constructor-1}

> **EventSwitcherEntry**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EventSwitcherEntry](/vext/ref/fb/eventswitcherentry) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### EventSwitcherEntry {#constructor-2}

> **EventSwitcherEntry**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup))

Casts an instance of type [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) to [EventSwitcherEntry](/vext/ref/fb/eventswitcherentry). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) | The instance to cast to [EventSwitcherEntry](/vext/ref/fb/eventswitcherentry). |

### EventSwitcherEntry {#constructor-3}

> **EventSwitcherEntry**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [EventSwitcherEntry](/vext/ref/fb/eventswitcherentry). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [EventSwitcherEntry](/vext/ref/fb/eventswitcherentry). |

## Properties

### {{% prop-heading "caseTrigger" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "value" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EventSwitcherEntry](/vext/ref/fb/eventswitcherentry) type.

