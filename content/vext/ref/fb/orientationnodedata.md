---
title: OrientationNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[OrientationNodeData](#constructor-0)**() |
| **[OrientationNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[OrientationNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[OrientationNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "listenerRelativeYaw" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "listenerRelativePitch" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "listenerRelativeRoll" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "OrientationNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### OrientationNodeData {#constructor-0}
> **OrientationNodeData**()

Creates a new [OrientationNodeData](/vext/ref/fb/orientationnodedata) frostbite instance.

### OrientationNodeData {#constructor-1}
> **OrientationNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [OrientationNodeData](/vext/ref/fb/orientationnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### OrientationNodeData {#constructor-2}
> **OrientationNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [OrientationNodeData](/vext/ref/fb/orientationnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [OrientationNodeData](/vext/ref/fb/orientationnodedata). |

### OrientationNodeData {#constructor-3}
> **OrientationNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [OrientationNodeData](/vext/ref/fb/orientationnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [OrientationNodeData](/vext/ref/fb/orientationnodedata). |

## Properties
### {{% prop-heading "listenerRelativeYaw" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "listenerRelativePitch" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "listenerRelativeRoll" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [OrientationNodeData](/vext/ref/fb/orientationnodedata) type.

