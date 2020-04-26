---
title: VoiceOverContainerNode
---

Inherits from [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode)

## Summary

### Constructors

|  |
| --- |
| **[VoiceOverContainerNode](#constructor-0)**() |
| **[VoiceOverContainerNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VoiceOverContainerNode](#constructor-2)**(other: [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode)) |
| **[VoiceOverContainerNode](#constructor-3)**(other: [VoiceOverNode](/vext/ref/fb/voiceovernode)) |
| **[VoiceOverContainerNode](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "condition" >}} | [VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection)[] |
| {{< prop "interval" >}} | [VoiceOverIntervalNode](/vext/ref/fb/voiceoverintervalnode) \| nil |
| {{< prop "trueRelationship" >}} | [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode)[] |
| {{< prop "falseRelationship" >}} | [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode)[] |
| {{< prop "conditionMode" >}} | [VoiceOverContainerConditionMode](/vext/ref/fb/voiceovercontainerconditionmode) |
| {{< prop "probability" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverContainerNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VoiceOverContainerNode {#constructor-0}

> **VoiceOverContainerNode**()

Creates a new [VoiceOverContainerNode](/vext/ref/fb/voiceovercontainernode) frostbite instance.

### VoiceOverContainerNode {#constructor-1}

> **VoiceOverContainerNode**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VoiceOverContainerNode](/vext/ref/fb/voiceovercontainernode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VoiceOverContainerNode {#constructor-2}

> **VoiceOverContainerNode**(other: [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode))

Casts an instance of type [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode) to [VoiceOverContainerNode](/vext/ref/fb/voiceovercontainernode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode) | The instance to cast to [VoiceOverContainerNode](/vext/ref/fb/voiceovercontainernode). |

### VoiceOverContainerNode {#constructor-3}

> **VoiceOverContainerNode**(other: [VoiceOverNode](/vext/ref/fb/voiceovernode))

Casts an instance of type [VoiceOverNode](/vext/ref/fb/voiceovernode) to [VoiceOverContainerNode](/vext/ref/fb/voiceovercontainernode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VoiceOverNode](/vext/ref/fb/voiceovernode) | The instance to cast to [VoiceOverContainerNode](/vext/ref/fb/voiceovercontainernode). |

### VoiceOverContainerNode {#constructor-4}

> **VoiceOverContainerNode**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VoiceOverContainerNode](/vext/ref/fb/voiceovercontainernode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VoiceOverContainerNode](/vext/ref/fb/voiceovercontainernode). |

## Properties

### {{% prop-heading "condition" %}}

> **[VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection)**[]

### {{% prop-heading "interval" %}}

> **[VoiceOverIntervalNode](/vext/ref/fb/voiceoverintervalnode)** \| **nil**

### {{% prop-heading "trueRelationship" %}}

> **[VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode)**[]

### {{% prop-heading "falseRelationship" %}}

> **[VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode)**[]

### {{% prop-heading "conditionMode" %}}

> **[VoiceOverContainerConditionMode](/vext/ref/fb/voiceovercontainerconditionmode)**

### {{% prop-heading "probability" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VoiceOverContainerNode](/vext/ref/fb/voiceovercontainernode) type.

