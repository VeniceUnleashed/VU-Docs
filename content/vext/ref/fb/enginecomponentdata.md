---
title: EngineComponentData
---

Inherits from 
[ComponentData](/vext/ref/fb/componentdata)

## Summary
### Constructors
| |
| ----------- |
| **[EngineComponentData](#constructor-0)**() |
| **[EngineComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[EngineComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[EngineComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[EngineComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[EngineComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "config" >}} | [EngineConfigData](/vext/ref/fb/engineconfigdata) \| nil |
| {{< prop "soundEffect" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "surfaceSoundEffect" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "useFirstPersonSounds" >}} | bool |
| {{< prop "outputIsEngineInWater" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EngineComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EngineComponentData {#constructor-0}
> **EngineComponentData**()

Creates a new [EngineComponentData](/vext/ref/fb/enginecomponentdata) frostbite instance.

### EngineComponentData {#constructor-1}
> **EngineComponentData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [EngineComponentData](/vext/ref/fb/enginecomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### EngineComponentData {#constructor-2}
> **EngineComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [EngineComponentData](/vext/ref/fb/enginecomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [EngineComponentData](/vext/ref/fb/enginecomponentdata). |

### EngineComponentData {#constructor-3}
> **EngineComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [EngineComponentData](/vext/ref/fb/enginecomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [EngineComponentData](/vext/ref/fb/enginecomponentdata). |

### EngineComponentData {#constructor-4}
> **EngineComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [EngineComponentData](/vext/ref/fb/enginecomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [EngineComponentData](/vext/ref/fb/enginecomponentdata). |

### EngineComponentData {#constructor-5}
> **EngineComponentData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EngineComponentData](/vext/ref/fb/enginecomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [EngineComponentData](/vext/ref/fb/enginecomponentdata). |

## Properties
### {{% prop-heading "config" %}}
> **[EngineConfigData](/vext/ref/fb/engineconfigdata)** | **nil**

### {{% prop-heading "soundEffect" %}}
> **[SoundAsset](/vext/ref/fb/soundasset)** | **nil**

### {{% prop-heading "surfaceSoundEffect" %}}
> **[SoundAsset](/vext/ref/fb/soundasset)** | **nil**

### {{% prop-heading "useFirstPersonSounds" %}}
> **bool**

### {{% prop-heading "outputIsEngineInWater" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EngineComponentData](/vext/ref/fb/enginecomponentdata) type.

