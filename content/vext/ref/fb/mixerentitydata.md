---
title: MixerEntityData
---

Inherits from 
[EntityData](/vext/ref/fb/entitydata)

## Summary
### Constructors
| |
| ----------- |
| **[MixerEntityData](#constructor-0)**() |
| **[MixerEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MixerEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[MixerEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[MixerEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[MixerEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "mixer" >}} | [MixerAsset](/vext/ref/fb/mixerasset) \| nil |
| {{< prop "activateOnCreation" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MixerEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MixerEntityData {#constructor-0}
> **MixerEntityData**()

Creates a new [MixerEntityData](/vext/ref/fb/mixerentitydata) frostbite instance.

### MixerEntityData {#constructor-1}
> **MixerEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MixerEntityData](/vext/ref/fb/mixerentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MixerEntityData {#constructor-2}
> **MixerEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [MixerEntityData](/vext/ref/fb/mixerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [MixerEntityData](/vext/ref/fb/mixerentitydata). |

### MixerEntityData {#constructor-3}
> **MixerEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [MixerEntityData](/vext/ref/fb/mixerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [MixerEntityData](/vext/ref/fb/mixerentitydata). |

### MixerEntityData {#constructor-4}
> **MixerEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [MixerEntityData](/vext/ref/fb/mixerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [MixerEntityData](/vext/ref/fb/mixerentitydata). |

### MixerEntityData {#constructor-5}
> **MixerEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixerEntityData](/vext/ref/fb/mixerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MixerEntityData](/vext/ref/fb/mixerentitydata). |

## Properties
### {{% prop-heading "mixer" %}}
> **[MixerAsset](/vext/ref/fb/mixerasset)** | **nil**

### {{% prop-heading "activateOnCreation" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MixerEntityData](/vext/ref/fb/mixerentitydata) type.

