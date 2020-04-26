---
title: SceneRecordingData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[SceneRecordingData](#constructor-0)**() |
| **[SceneRecordingData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SceneRecordingData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "data" >}} | [EntityRecordingData](/vext/ref/fb/entityrecordingdata)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SceneRecordingData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SceneRecordingData {#constructor-0}
> **SceneRecordingData**()

Creates a new [SceneRecordingData](/vext/ref/fb/scenerecordingdata) frostbite instance.

### SceneRecordingData {#constructor-1}
> **SceneRecordingData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SceneRecordingData](/vext/ref/fb/scenerecordingdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SceneRecordingData {#constructor-2}
> **SceneRecordingData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SceneRecordingData](/vext/ref/fb/scenerecordingdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SceneRecordingData](/vext/ref/fb/scenerecordingdata). |

## Properties
### {{% prop-heading "data" %}}
> **[EntityRecordingData](/vext/ref/fb/entityrecordingdata)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SceneRecordingData](/vext/ref/fb/scenerecordingdata) type.

