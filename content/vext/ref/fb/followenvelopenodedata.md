---
title: FollowEnvelopeNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[FollowEnvelopeNodeData](#constructor-0)**() |
| **[FollowEnvelopeNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[FollowEnvelopeNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[FollowEnvelopeNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "x" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "y" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "base" >}} | float |
| {{< prop "scale" >}} | float |
| {{< prop "pivot" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "FollowEnvelopeNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### FollowEnvelopeNodeData {#constructor-0}
> **FollowEnvelopeNodeData**()

Creates a new [FollowEnvelopeNodeData](/vext/ref/fb/followenvelopenodedata) frostbite instance.

### FollowEnvelopeNodeData {#constructor-1}
> **FollowEnvelopeNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [FollowEnvelopeNodeData](/vext/ref/fb/followenvelopenodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### FollowEnvelopeNodeData {#constructor-2}
> **FollowEnvelopeNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [FollowEnvelopeNodeData](/vext/ref/fb/followenvelopenodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [FollowEnvelopeNodeData](/vext/ref/fb/followenvelopenodedata). |

### FollowEnvelopeNodeData {#constructor-3}
> **FollowEnvelopeNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FollowEnvelopeNodeData](/vext/ref/fb/followenvelopenodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [FollowEnvelopeNodeData](/vext/ref/fb/followenvelopenodedata). |

## Properties
### {{% prop-heading "x" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "y" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "base" %}}
> **float**

### {{% prop-heading "scale" %}}
> **float**

### {{% prop-heading "pivot" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [FollowEnvelopeNodeData](/vext/ref/fb/followenvelopenodedata) type.

