/*
 * Geddy JavaScript Web development framework
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/


var router = new geddy.RegExpRouter();

router.get('/').to('Main.index');
router.get('/ctbyrg/:id').to('CiudadProfiles.byRegion');
router.get('/znbyct/:id').to('ZonaProfiles.byCiudad');


// Basic routes
// router.match('/moving/pictures/:id', 'GET').to('Moving.pictures');
//
// router.match('/farewells/:farewelltype/kings/:kingid', 'GET').to('Farewells.kings');
//
// Can also match specific HTTP methods only
// router.get('/xandadu').to('Xanadu.specialHandler');
// router.del('/xandadu/:id').to('Xanadu.killItWithFire');
//
// Resource-based routes
// router.resource('hemispheres');
//
// Nested Resource-based routes
// router.resource('hemispheres', function(){
//   this.resource('countries');
//   this.get('/print(.:format)').to('Hemispheres.print');
// });

router.resource('maestro_profiles');
router.resource('menu_profiles');
router.resource('user__profiles');
router.resource('entidad__profiles');
router.resource('entidad_profiles');
router.resource('user_profiles');
router.resource('ips_profiles');
router.resource('especialidad_profiles');
router.resource('potencial_profiles');
router.resource('categoria_profiles');
router.resource('entidades_profiles');
router.resource('zona_profiles');
router.resource('region_profiles');
router.resource('ciudad_profiles');
router.resource('profesional_profiles');

router.resource('profesional_time_tables');
router.resource('actividad_profiles');
router.resource('visita_profiles');
router.resource('aaaprofiles');
router.resource('as');
router.resource('aas');
exports.router = router;
