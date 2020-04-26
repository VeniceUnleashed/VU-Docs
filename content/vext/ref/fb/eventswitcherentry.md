---
title: EventSwitcherEntry
---

Inherits from 
[AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)

## Summary
### Constructors
| |
| ----------- |
| **[EventSwitcherEntry](#constructor-0)**() |
| **[EventSwitcherEntry](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[EventSwitcherEntry](#constructor-2)**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)) |
| **[EventSwitcherEntry](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "caseTrigger" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "value" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EventSwitcherEntry" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EventSwitcherEntry {#constructor-0}
> **EventSwitcherEntry**()

Creates a new [EventSwitcherEntry](/vext/ref/fb/eventswitcherentry) frostbite instance.

### EventSwitcherEntry {#constructor-1}
> **EventSwitcherEntry**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [EventSwitcherEntry](/vext/ref/fb/eventswitcherentry) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### EventSwitcherEntry {#constructor-2}
> **EventSwitcherEntry**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup))

Casts an instance of type [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) to [EventSwitcherEntry](/vext/ref/fb/eventswitcherentry). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) | The instance to cast to [EventSwitcherEntry](/vext/ref/fb/eventswitcherentry). |

### EventSwitcherEntry {#constructor-3}
> **EventSwitcherEntry**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EventSwitcherEntry](/vext/ref/fb/eventswitcherentry). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [EventSwitcherEntry](/vext/ref/fb/eventswitcherentry). |

## Properties
### {{% prop-heading "caseTrigger" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "value" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EventSwitcherEntry](/vext/ref/fb/eventswitcherentry) type.

