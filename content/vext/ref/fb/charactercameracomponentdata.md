---
title: CharacterCameraComponentData
---

Inherits from 
[ComponentData](/vext/ref/fb/componentdata)

## Summary
### Constructors
| |
| ----------- |
| **[CharacterCameraComponentData](#constructor-0)**() |
| **[CharacterCameraComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[CharacterCameraComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[CharacterCameraComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[CharacterCameraComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[CharacterCameraComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "cameras" >}} | [TargetCameraData](/vext/ref/fb/targetcameradata)[] |
| {{< prop "cameraBoneName" >}} | string |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CharacterCameraComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CharacterCameraComponentData {#constructor-0}
> **CharacterCameraComponentData**()

Creates a new [CharacterCameraComponentData](/vext/ref/fb/charactercameracomponentdata) frostbite instance.

### CharacterCameraComponentData {#constructor-1}
> **CharacterCameraComponentData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [CharacterCameraComponentData](/vext/ref/fb/charactercameracomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### CharacterCameraComponentData {#constructor-2}
> **CharacterCameraComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [CharacterCameraComponentData](/vext/ref/fb/charactercameracomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [CharacterCameraComponentData](/vext/ref/fb/charactercameracomponentdata). |

### CharacterCameraComponentData {#constructor-3}
> **CharacterCameraComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [CharacterCameraComponentData](/vext/ref/fb/charactercameracomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [CharacterCameraComponentData](/vext/ref/fb/charactercameracomponentdata). |

### CharacterCameraComponentData {#constructor-4}
> **CharacterCameraComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [CharacterCameraComponentData](/vext/ref/fb/charactercameracomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [CharacterCameraComponentData](/vext/ref/fb/charactercameracomponentdata). |

### CharacterCameraComponentData {#constructor-5}
> **CharacterCameraComponentData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterCameraComponentData](/vext/ref/fb/charactercameracomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [CharacterCameraComponentData](/vext/ref/fb/charactercameracomponentdata). |

## Properties
### {{% prop-heading "cameras" %}}
> **[TargetCameraData](/vext/ref/fb/targetcameradata)**[]

### {{% prop-heading "cameraBoneName" %}}
> **string**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CharacterCameraComponentData](/vext/ref/fb/charactercameracomponentdata) type.

