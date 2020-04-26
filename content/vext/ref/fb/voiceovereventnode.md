---
title: VoiceOverEventNode
---

Inherits from 
[VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode)

## Summary
### Constructors
| |
| ----------- |
| **[VoiceOverEventNode](#constructor-0)**() |
| **[VoiceOverEventNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VoiceOverEventNode](#constructor-2)**(other: [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode)) |
| **[VoiceOverEventNode](#constructor-3)**(other: [VoiceOverNode](/vext/ref/fb/voiceovernode)) |
| **[VoiceOverEventNode](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "interval" >}} | [VoiceOverIntervalNode](/vext/ref/fb/voiceoverintervalnode) \| nil |
| {{< prop "relationship" >}} | [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode)[] |
| {{< prop "redirects" >}} | [VoiceOverValueRedirect](/vext/ref/fb/voiceovervalueredirect)[] |
| {{< prop "event" >}} | [VoiceOverEvent](/vext/ref/fb/voiceoverevent) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverEventNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VoiceOverEventNode {#constructor-0}
> **VoiceOverEventNode**()

Creates a new [VoiceOverEventNode](/vext/ref/fb/voiceovereventnode) frostbite instance.

### VoiceOverEventNode {#constructor-1}
> **VoiceOverEventNode**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VoiceOverEventNode](/vext/ref/fb/voiceovereventnode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VoiceOverEventNode {#constructor-2}
> **VoiceOverEventNode**(other: [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode))

Casts an instance of type [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode) to [VoiceOverEventNode](/vext/ref/fb/voiceovereventnode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode) | The instance to cast to [VoiceOverEventNode](/vext/ref/fb/voiceovereventnode). |

### VoiceOverEventNode {#constructor-3}
> **VoiceOverEventNode**(other: [VoiceOverNode](/vext/ref/fb/voiceovernode))

Casts an instance of type [VoiceOverNode](/vext/ref/fb/voiceovernode) to [VoiceOverEventNode](/vext/ref/fb/voiceovereventnode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VoiceOverNode](/vext/ref/fb/voiceovernode) | The instance to cast to [VoiceOverEventNode](/vext/ref/fb/voiceovereventnode). |

### VoiceOverEventNode {#constructor-4}
> **VoiceOverEventNode**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverEventNode](/vext/ref/fb/voiceovereventnode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VoiceOverEventNode](/vext/ref/fb/voiceovereventnode). |

## Properties
### {{% prop-heading "interval" %}}
> **[VoiceOverIntervalNode](/vext/ref/fb/voiceoverintervalnode)** | **nil**

### {{% prop-heading "relationship" %}}
> **[VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode)**[]

### {{% prop-heading "redirects" %}}
> **[VoiceOverValueRedirect](/vext/ref/fb/voiceovervalueredirect)**[]

### {{% prop-heading "event" %}}
> **[VoiceOverEvent](/vext/ref/fb/voiceoverevent)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VoiceOverEventNode](/vext/ref/fb/voiceovereventnode) type.

