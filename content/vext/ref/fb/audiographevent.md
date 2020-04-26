---
title: AudioGraphEvent
---

Inherits from 
[AudioGraphParameter](/vext/ref/fb/audiographparameter)

## Summary
### Constructors
| |
| ----------- |
| **[AudioGraphEvent](#constructor-0)**() |
| **[AudioGraphEvent](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[AudioGraphEvent](#constructor-2)**(other: [AudioGraphParameter](/vext/ref/fb/audiographparameter)) |
| **[AudioGraphEvent](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AudioGraphEvent" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AudioGraphEvent {#constructor-0}
> **AudioGraphEvent**()

Creates a new [AudioGraphEvent](/vext/ref/fb/audiographevent) frostbite instance.

### AudioGraphEvent {#constructor-1}
> **AudioGraphEvent**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [AudioGraphEvent](/vext/ref/fb/audiographevent) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### AudioGraphEvent {#constructor-2}
> **AudioGraphEvent**(other: [AudioGraphParameter](/vext/ref/fb/audiographparameter))

Casts an instance of type [AudioGraphParameter](/vext/ref/fb/audiographparameter) to [AudioGraphEvent](/vext/ref/fb/audiographevent). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphParameter](/vext/ref/fb/audiographparameter) | The instance to cast to [AudioGraphEvent](/vext/ref/fb/audiographevent). |

### AudioGraphEvent {#constructor-3}
> **AudioGraphEvent**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AudioGraphEvent](/vext/ref/fb/audiographevent). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [AudioGraphEvent](/vext/ref/fb/audiographevent). |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AudioGraphEvent](/vext/ref/fb/audiographevent) type.

