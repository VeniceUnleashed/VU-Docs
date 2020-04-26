---
title: SoundEntityData
---

Inherits from 
[EntityData](/vext/ref/fb/entitydata)

## Summary
### Constructors
| |
| ----------- |
| **[SoundEntityData](#constructor-0)**() |
| **[SoundEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SoundEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[SoundEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[SoundEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[SoundEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "transform" >}} | [LinearTransform](/vext/ref/shared/class/lineartransform) |
| {{< prop "sound" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "obstructionHandle" >}} | int |
| {{< prop "playOnCreation" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoundEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoundEntityData {#constructor-0}
> **SoundEntityData**()

Creates a new [SoundEntityData](/vext/ref/fb/soundentitydata) frostbite instance.

### SoundEntityData {#constructor-1}
> **SoundEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SoundEntityData](/vext/ref/fb/soundentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SoundEntityData {#constructor-2}
> **SoundEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [SoundEntityData](/vext/ref/fb/soundentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [SoundEntityData](/vext/ref/fb/soundentitydata). |

### SoundEntityData {#constructor-3}
> **SoundEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [SoundEntityData](/vext/ref/fb/soundentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [SoundEntityData](/vext/ref/fb/soundentitydata). |

### SoundEntityData {#constructor-4}
> **SoundEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [SoundEntityData](/vext/ref/fb/soundentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [SoundEntityData](/vext/ref/fb/soundentitydata). |

### SoundEntityData {#constructor-5}
> **SoundEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundEntityData](/vext/ref/fb/soundentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SoundEntityData](/vext/ref/fb/soundentitydata). |

## Properties
### {{% prop-heading "transform" %}}
> **[LinearTransform](/vext/ref/shared/class/lineartransform)**

### {{% prop-heading "sound" %}}
> **[SoundAsset](/vext/ref/fb/soundasset)** | **nil**

### {{% prop-heading "obstructionHandle" %}}
> **int**

### {{% prop-heading "playOnCreation" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoundEntityData](/vext/ref/fb/soundentitydata) type.

